/**
 * Load all external dependencies TODO: Move these to the files that need them instead of passing them as properties ( DIRTY ).
 */
const { Client, GatewayIntentBits } = require('discord.js');

/**
 * Load all internal dependencies
 */
const Clapp   = require('./modules/clapp.js');
const ZBotEvents    = require('./modules/events.js');
const cfg     = require('../config.js');
const defaultConfig  = require('../defaults.js');
const pkg     = require('../package.json');

/**
 * Create bot instance.
 */
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildPresences,
  GatewayIntentBits.GuildMessageReactions,
  GatewayIntentBits.MessageContent,
] });

/**
 * Initiate Clapp module
 * This module is an clean and easy implementation for replying to ! commmands.
 * @type {App}
 */
const clapp = new Clapp.App({
  name: cfg.name,
  desc: pkg.description,
  prefix: cfg.prefix,
  version: pkg.version,
  onReply: (msg, context) => {
    context.msg.reply('\n' + msg).then(bot_response => {
      if (cfg.deleteAfterReply.enabled) {
        context.msg.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
        bot_response.delete(cfg.deleteAfterReply.time)
          .then(msg => console.log(`Deleted message from ${msg.author}`))
          .catch(console.log);
      }
    });
  }
});


/**s
 * Initiate the ZBotEvents of the ZBot module
 * This will be your medium between Discord Events and ZBot.
 * @type {ZBotEvents}
 */
const zBotEvents = new ZBotEvents(cfg.token, {
  bot: client,
  cfg: cfg,
  clapp: clapp,
  defaultConfig: defaultConfig
});
