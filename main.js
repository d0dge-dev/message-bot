const discord = require('discord.js')

const client = new discord.Client({
    intents: [
        discord.GatewayIntentBits.GuildMessages,
        discord.GatewayIntentBits.GuildMembers,
        discord.GatewayIntentBits.GuildMessageReactions,
        discord.GatewayIntentBits.Guilds,
        discord.GatewayIntentBits.GuildPresences,
    ]
})

function embedcreator(path) {
    let config = require('./config')
    const { EmbedBuilder } = require('discord.js');

    // get the config path
    const args = path.split('.')

    // get the config
    let conf = config

    // get item from config
    args.forEach(argument => {
        conf = conf[argument]
    });

    // create a new EmbedBuilder
    const embed = new EmbedBuilder()
        .setColor(conf.color || config.bot.color)
        .setTitle(conf.title)
        .setDescription(conf.description)

    // check if the author iconURL and Footer iconURL is a url
    if (conf.author?.iconURL && !conf.author.iconURL.startsWith('http')) conf.author.iconURL = null
    if (conf.footer?.iconURL && !conf.footer.iconURL.startsWith('http')) conf.footer.iconURL = null
    
    // set the author and footer
    if (conf.footer?.text) embed.setFooter(conf.footer)
    if (conf.author?.name) embed.setAuthor(conf.author)

    // set the image, banner, timestamp and url
    if (conf.image) embed.setThumbnail(conf.image)
    if (conf.banner) embed.setImage(conf.banner)
    if (conf.timestamp) embed.setTimestamp()
    if (conf.url) embed.setURL(conf.url)

    // add fields
    if (conf.fields) conf.fields.forEach(filed => {
        embed.addFields(filed)
    });

    // return the embed
    return embed
}

const config = require('./config.js')

client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag + '!')
    if (!config.bot.activitys) return
    if (!config.bot.intervall) return
    if (!config.bot.enabled) return
    setInterval(() => {
        let i = 0
        const activity = config.bot.activitys[i]
        client.user.setStatus(activity.status)
        client.user.setActivity({ name: activity.name, type: activity.type })
        i++
    }, config.bot.intervall)
})

client.on('guildMemberAdd', async (member) => {
    console.log("welcome")
    const channel = member.guild.channels.cache.get(config.messages.welcome.channel)
    if (!channel) return

    const embed = embedcreator('messages.welcome')
        .setDescription(config.messages.welcome.description
            .replace('{userping}', member.toString())
            .replace('{username}', member.user.username)
            .replace('{displayname}', member.displayName)
            .replace('{ammountmember}', member.guild.memberCount)
        )
    channel.send({ embeds: [embed] })
})

client.on('guildMemberRemove', async (member) => {
    console.log("godbye")
    const channel = member.guild.channels.cache.get(config.messages.goodbye.channel)
    if (!channel) return

    const embed = embedcreator('messages.goodbye')
        .setDescription(config.messages.goodbye.description
            .replace('{userping}', member.toString())
            .replace('{username}', member.user.username)
            .replace('{displayname}', member.displayName)
            .replace('{ammountmember}', member.guild.memberCount)
        )
    channel.send({ embeds: [embed] })
})

client.on('guildMemberUpdate', async (oldmember, newmember) => {
    console.log("boost")
    if (newmember.premiumSinceTimestamp === null) return
    if (oldmember.premiumSinceTimestamp === newmember.premiumSinceTimestamp) return
    const channel = newmember.guild.channels.cache.get(config.messages.boost.channel)
    if (!channel) return

    const embed = embedcreator('messages.boost')
        .setDescription(config.messages.boost.description
            .replace('{userping}', newmember.toString())
            .replace('{username}', newmember.user.username)
            .replace('{displayname}', newmember.displayName)
            .replace('{ammountboosts}', newmember.guild.premiumSubscriptionCount)
        )
    channel.send({ embeds: [embed] })
})

client.on('messageCreate', async (message) => {
    if (!message.author.bot) return
    if (message.author.id !== client.user.id) return

    if (message.channel.id != config.messages.boost.channel) return

    if (!config.messages.boost.reaction.enabled) return

    message.react(config.messages.boost.reaction.emoji)
})

client.login(config.bot.token)