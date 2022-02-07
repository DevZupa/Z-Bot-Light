module.exports = {

    // Your bot name. Typically, this is your bot's username without the discriminator.
    // i.e: if your bot's username is MemeBot#0420, then this option would be MemeBot.
    name: "<Your Discord Botname here>",

    // Needs to be exactly the same as your discord server name. ( To know where to log bot logs ).
    discordServerName: '<Your Discord Servername here>',

    version: "1.0.0", // doesn't matter at all.

    // The bot's command prefix. The bot will recognize as command any message that begins with it.
    // i.e: "!zbot foo" will trigger the command "foo",
    prefix:  "!zbot",
    // rcon commands is always !rcon

    // Your bot's user token. If you don't know what that is, go here:
    // https://discordapp.com/developers/applications/me
    // Then create a new application and grab your token.
    token: "<Your Discord Bot Token here>", // eg  NjEzNjgyODk0Nzk1NDQwMTI4.XV0ezg.xxxxxxxxxxxxxxxxxxxxxx

    encryptionKey: '4zcMONp61gpVDcuckG0u',

    defaultPlayingStatus: 'RCon', // Change this to whatever you want.

    // If this option is enabled, the bot will delete the message that triggered it, and its own
    // response, after the specified amount of time has passed.
    // Enable this if you don't want your channel to be flooded with bot messages.
    // ATTENTION! In order for this to work, you need to give your bot the following permission:
    // MANAGE_MESSAGES - 	0x00002000
    // More info: https://discordapp.com/developers/docs/topics/permissions
    deleteAfterReply: {
        enabled: false,
        time: 10000 // In milliseconds
    },

    log: {
        enable: true,
        channel: 'bot-log'
    },

    rconReconnect: 30000, // Miliseconds to try reconnect, if server restart or somehow disconnected ( 30 000 = 30 sec )
    loginAttempts: 20, // total login attempts every "rconReconnect" milieseconds when connection is lost ( eg: when server restarts. )

    specificLoaded: false,

    specific: {

        // eg: 256158903245471753
        guildId: "<your Server ID>", // Found @ Discord -> (Your server) Server Settings -> Widget -> Copy Server ID

        channels: {
            welcome: "welcome", // not used in this version
            goodbye: "welcome", // not used in this version
            log: "bot-log" // to log all your technical bot messages.
        },

        watcher: [
            {
                active: false,
                channel: 'bot-kill',
                directory: 'logs/', // Can also be an absolute path (eg: "C:/Users/server/logs/" )
                file: 'KillFeed_*.log', // Supports wilcard (*), this will check all the files with the given filter and takes the last modified one to monitor
                // This is done so there can be log rotations in the same folder.
            }
        ],

        bercon: {
            enabled: true,
            colors: true,
            sendMessagesAsEmbeds: true, // if false, bot posts as code block with coloring. If yes, visual crads with white/black text and channel color as left border.
            embedColors: { // Hex color of the embed borders.
                side: '#6ABEE7',
                direct: '#959AA4',
                vehicle: '#DBBD48',
                group: '#3A8347',
                admin: '#ff0000',
                privateadmin: '#ff00ff',
                default: '#ffffff',
                commands: '#ffffff',
                joins: '#92FA4D',
                global: '#6ABEE7'
            },
            servers: [
                {
                    name: '<Your Rcon Username you wishes>', // Just informational in logging.
                    ip: '<your DayZ Server IP>',
                    port: 2305, // Rcon PORT - Default 2305 or 2303
                    rconPassword: '<your RCON Password>',
                    timezone: 0, // must be a number, if negative just put - ( eg:  -2 ). This is UTC timezone of your server location.

                    actions: [ // actions only for this server.
                        {
                            command: '!server ts', // Command that a player can type ingame
                            reply: 'We use discord!', // Bot response ingame
                            discordReply: '@Admin Someone asked for ts...', // Bot respone in discord. leave empty if not wanted.
                            role: 'rcon-admin' // role to mention in discord together with discordreply, leave '' if none.
                        }
                    ],
                    channels: { // It's recommended to split several of these into different channels.
                        side: 'bot-text', // #bot-text ( leave the discord # )
                        direct: 'bot-text',
                        vehicle: 'bot-text',
                        group: 'bot-text',
                        admin: 'bot-text',
                        privateadmin: 'bot-text',
                        default: 'bot-text',
                        commands: 'bot-text',
                        joins: 'bot-text',
                        global: 'bot-text'
                    },
                    showChannels: {
                        side: true, // Arma only
                        direct: true, // Used in DayZ SA and arma ( In Dayz, these are part of global chat but filtered to separate stream )
                        vehicle: true, // Arma only
                        group: true, // Arma only
                        admin: true, // Used in DayZ SA and arma ( RCON chat that is private or join messages )
                        privateadmin: true, // Used in DayZ SA and arma ( Text that is sent via rcon to 1 person )
                        default: true, // Used in DayZ SA and arma ( Fallback for non-mapped messages if there are any )
                        commands: true, // Used in DayZ SA and arma ( Poeple with the role ( set a bit lower ) can use the given discord channel to type commands.
                        joins: true, // Used in DayZ SA and arma ( Join messages )
                        global: true // Used in DayZ SA and arma sometimes ( Global dayz chat )
                    },
                    jobs: [ // Google: Cron jobs.
                        {
                            time: '0 0 6 * * *', // Command that a player can type ingame
                            text: 'Enjoy your stay!', // Bot response ingame
                        }
                    ]
                }
            ],
            sharedActions: [ // shared between all servers.
                {
                    command: '!ts', // Command that a player can type in-game
                    reply: 'We use discord!', // Bot response in-game
                    discordReply: '@Admin Someone asked for ts...', // Bot response in discord. leave empty if not wanted.
                    role: 'rcon-admin' // role to mention in discord together with discord reply
                },
                {
                    command: '!discord',
                    reply: 'A nice discord link - Change this.',
                    discordReply: '',
                    role: ''
                }
            ],
            permissions: { // Discord role to be able to let an user use the rcon commands.
                players: 'rcon-admin',
                admins: 'rcon-admin',
                bans: 'rcon-admin',
                loadScripts: 'rcon-admin',
                loadEvents: 'rcon-admin',
                say: 'rcon-admin',
                missions: 'rcon-admin',
                version: 'rcon-admin',
                update: 'rcon-admin',
                loadBans: 'rcon-admin',
                writeBans: 'rcon-admin',
                removeBan: 'rcon-admin',
                ban: 'rcon-admin',
                addBan: 'rcon-admin',
                MaxPing: 'rcon-admin',
                kick: 'rcon-admin',
                serverCommands: 'rcon-admin'
            }
        }
    }
};
