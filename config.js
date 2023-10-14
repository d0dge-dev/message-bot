const config = {}
require('dotenv').config()

config.bot = {
    token: process.env.TOKEN,
    enabled: false,
    activitys: [
        {
            name: "CODEDBOTZ",
            type: "Watching", // Playing, Listening, Watching
            status: "online" // online, idle, dnd, invisible
        },
        {
            name: "CODEDBOTZ",
            type: "Watching",
            status: "afk"
        }
    ],
    intervall: 10000, // 10 Seconds
}

config.messages = {
    welcome: {
        channel: "1140405329578971238", // Channel ID
        dm: false, // If true the bot will send a DM to the User
        roles: ["ID1", "ID2"], // Roles User get when they join
        title: "Welcome", // Title of Embed
        description: "Hello {userping}, glad to see you here!\n\nMember No. {ammountmember}", // Description of Embed
        color: "#2d1f54", // Color of Embed
        image: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Image of Embed
        banner: "https://cdn.discordapp.com/attachments/1148993838678032384/1148993947700580442/welcome.png", // Banner of Embed
        author: {
            name: "CODEDBOTZ", // Name of Author
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Author
            url: "https://discord.gg/codebotz", // URL of Author
        },
        footer: {
            text: "CODEBOTZ", // Text of Footer
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Footer
        },
        // fields: [
        //     {
        //         name: "Rules",
        //         value: "Please read the rules in <#1140405329578971239> and react to the message to get access to the server.",
        //         inline: true
        //     },
        //     {
        //         name: "Roles",
        //         value: "Get your roles in <#1140405332978601472>.",
        //         inline: true
        //     }
        // ],
        timestamp: true, // If true the Embed will have a Timestamp
    },
    goodbye: {
        channel: "1140405449900949635", // Channel ID
        title: "Goodbye", // Title of Embed
        description: "Goodbye {userping}, we hope you enjoyed your stay!\n\nMembers left: {ammountmember}", // Description of Embed
        color: "#2d1f54", // Color of Embed
        image: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Image of Embed
        banner: "https://cdn.discordapp.com/attachments/1148993838678032384/1152588692079251506/goodbye.png", // Banner of Embed
        author: {
            name: "CODEDBOTZ", // Name of Author
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Author
            url: "https://discord.gg/codebotz", // URL of Author
        },
        footer: {
            text: "CODEBOTZ", // Text of Footer
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Footer
        },
        // fields: [
        //     {
        //         name: "Rules",
        //         value: "Please read the rules in <#1140405329578971239> and react to the message to get access to the server.",
        //         inline: true
        //     },
        //     {
        //         name: "Roles",
        //         value: "Get your roles in <#1140405332978601472>.",
        //         inline: true
        //     }
        // ],
        timestamp: true, // If true the Embed will have a Timestamp
    },
    boost: {
        channel: "1140405448260989068", // Channel ID
        dm: false, // If true the bot will send a DM to the User
        reaction: {
            enabled: true, // If true the bot will react to the message
            emoji: "💜", // Emoji of Reaction
        },
        title: "Boost", // Title of Embed
        description: "Thank you {userping} for boosting our server!\n\nServer Boosts: {ammountboosts}", // Description of Embed
        color: "#2d1f54", // Color of Embed
        image: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Image of Embed
        banner: "https://cdn.discordapp.com/attachments/1148993838678032384/1152588692687437844/boost.png", // Banner of Embed
        author: {
            name: "CODEDBOTZ", // Name of Author
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Author
            url: "https://discord.gg/codebotz", // URL of Author
        },
        footer: {
            text: "CODEBOTZ", // Text of Footer
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Footer
        },
        // fields: [
        //     {
        //         name: "Rules",
        //         value: "Please read the rules in <#1140405329578971239> and react to the message to get access to the server.",
        //         inline: true
        //     },
        //     {
        //         name: "Roles",
        //         value: "Get your roles in <#1140405332978601472>.",
        //         inline: true
        //     }
        // ],
        timestamp: true, // If true the Embed will have a Timestamp
    }
}

module.exports = config