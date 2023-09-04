const config = {}
require('dotenv').config()

config.bot = {
    token: process.env.TOKEN,
}

config.messages = {
    welcome: {
        channel: "1140405329578971238", // Channel ID
        title: "Welcome", // Title of Embed
        description: "Hello {userping}, glad to see you here!\n\nMember No. {ammountmember}", // Description of Embed
        color: "#2d1f54", // Color of Embed
        image: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Image of Embed
        // banner: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Banner of Embed
        author: {
            name: "CODEDBOTZ", // Name of Author
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Author
            url: "https://discord.gg/codebotz", // URL of Author
        },
        footer: {
            text: "CODEBOTZ", // Text of Footer
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Footer
        },
        timestamp: true, // If true the Embed will have a Timestamp
    },
    goodbye: {
        channel: "1140405449900949635", // Channel ID
        title: "Goodbye", // Title of Embed
        description: "Goodbye {userping}, we hope you enjoyed your stay!\n\nMembers left: {ammountmember}", // Description of Embed
        color: "#2d1f54", // Color of Embed
        image: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Image of Embed
        // banner: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Banner of Embed
        author: {
            name: "CODEDBOTZ", // Name of Author
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Author
            url: "https://discord.gg/codebotz", // URL of Author
        },
        footer: {
            text: "CODEBOTZ", // Text of Footer
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Footer
        },
        timestamp: true, // If true the Embed will have a Timestamp
    },
    boost: {
        channel: "1140405448260989068", // Channel ID
        title: "Boost", // Title of Embed
        description: "Thank you {userping} for boosting our server!\n\nServer Boosts: {ammountboosts}", // Description of Embed
        color: "#2d1f54", // Color of Embed
        image: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Image of Embed
        // banner: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Banner of Embed
        author: {
            name: "CODEDBOTZ", // Name of Author
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Author
            url: "https://discord.gg/codebotz", // URL of Author
        },
        footer: {
            text: "CODEBOTZ", // Text of Footer
            iconURL: "https://media.discordapp.net/attachments/1061453021902544978/1140418112940945418/cdbz2.png", // Icon of Footer
        },
        timestamp: true, // If true the Embed will have a Timestamp
    }
}

module.exports = config