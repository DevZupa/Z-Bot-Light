const { Events } = require("discord.js");
const ZBot = require("./zbot");

/**
 * Class that contains all Client events.
 */
class ZBotEvents {
  /**
   * Constructor function. Gets called when class is made into a object.
   * @param {JSON} options
   * @param {string} token
   */
  constructor(token, options) {

    /**
     * Initiate the ZBot the ZBot module
     * This object is where all the magic happens and all logic should be written that cannot be put in a separate module.
     * @type {ZBot}
     */
    this._zbot = new ZBot(options);
    this._options = options;
    this._token = token;

    this._zbot.bot.on(Events.ChannelCreate, async(channel) => { this.onChannelCreate(channel); });
    this._zbot.bot.on(Events.ChannelDelete, async(channel) => { this.onChannelDelete(channel); });
    this._zbot.bot.on(Events.ChannelPinsUpdate, async(channel, date) => { this.onChannelPinsUpdate(channel, date); });
    this._zbot.bot.on(Events.ChannelUpdate, async(oldChannel, newChannel) => { this.onChannelUpdate(oldChannel, newChannel); });
    this._zbot.bot.on(Events.Debug, async(string) => { this.onDebug(string); });
    this._zbot.bot.on(Events.ShardDisconnect, async() => { this.onDisconnect(); });
    this._zbot.bot.on(Events.Error, async(error) => { this.onError(error); });
    this._zbot.bot.on(Events.GuildBanAdd, async(guild, user) => { this.onGuildBanAdd(guild,user); });
    this._zbot.bot.on(Events.GuildBanRemove, async(guild, user) => { this.onGuildBanRemove(guild,user); });
    this._zbot.bot.on(Events.GuildDelete, async(guild) => { this.onGuildCreate(guild); });
    this._zbot.bot.on(Events.GuildDelete, async(guild) => { this.onGuildDelete(guild); });
    this._zbot.bot.on(Events.GuildEmojiCreate, async(emoji) => { this.onGuildEmojiCreate(emoji); });
    this._zbot.bot.on(Events.GuildEmojiDelete, async(emoji) => { this.onGuildEmojiDelete(emoji); });
    this._zbot.bot.on(Events.GuildEmojiUpdate, async(oldEmoji, newEmoji) => { this.onGuildEmojiUpdate(oldEmoji, newEmoji); });
    this._zbot.bot.on(Events.GuildMemberAdd, async(member) => {this.onGuildMemberAdd(member)});
    this._zbot.bot.on(Events.GuildMemberAvailable, async(member) => {this.onGuildMemberAvailable(member)});
    this._zbot.bot.on(Events.GuildMemberRemove, async(member) => {this.onGuildMemberRemove(member)});
    this._zbot.bot.on(Events.GuildMembersChunk, async(members) => {this.onGuildMembersChunk(members)});
   
    this._zbot.bot.on(Events.GuildMemberUpdate, async(oldMember, newMember) => {this.onGuildMemberUpdate(oldMember, newMember)});
    this._zbot.bot.on(Events.GuildUnavailable, async(guild) => {this.onGuildUnavailable(guild);});
    this._zbot.bot.on(Events.GuildUpdate, async(oldGuild, newGuild) => {this.onGuildUpdate(oldGuild, newGuild)});
    this._zbot.bot.on(Events.MessageCreate, async (message) => {this.onMessage(message);});
    this._zbot.bot.on(Events.MessageDelete, async (message) => {this.onMessageDelete(message);});
    this._zbot.bot.on(Events.MessageBulkDelete, async (messages) => {this.onMessageDeleteBulk(messages);});
    this._zbot.bot.on(Events.MessageUpdate, async (oldMessage, newMessage) => {this.onMessageUpdate(oldMessage, newMessage);});
    this._zbot.bot.on(Events.PresenceUpdate, async(oldMember, newMember) => {this.onPresenceUpdate(oldMember, newMember);});
    this._zbot.bot.on(Events.ClientReady, async() => {this.onReady()});
    this._zbot.bot.on(Events.ShardReconnecting, async() => {this.onReconnecting()});
    this._zbot.bot.on(Events.GuildRoleCreate, async(role) => {this.onRoleCreate(role)});
    this._zbot.bot.on(Events.GuildRoleDelete, async(role) => {this.onRoleDelete(role)});
    this._zbot.bot.on(Events.GuildRoleUpdate, async(oldRole, newRole) => {this.onRoleUpdate(oldRole, newRole)});
    this._zbot.bot.on(Events.TypingStart, async(channel, user) => {this.onTypingStart(channel, user)});
    this._zbot.bot.on(Events.UserUpdate, async(oldUser, newUser) => {this.onUserUpdate(oldUser, newUser)});
    this._zbot.bot.on(Events.VoiceStateUpdate, async(oldMember, newMember) => {this.onVoiceStateUpdate(oldMember, newMember)});
    this._zbot.bot.on(Events.Warn, async(string) => {this.onWarn(string)});

    /**
     * Make the bot sign in to all servers.
     */
    this._zbot.bot.login(token).then(() => {
      console.log('ZBot logged in!');
    });

 //   process.on('uncaughtException', (err) => {
      //fs.writeSync(1, `Caught exception: ${err}`);
 //     this._zbot.logBot(`Caught exception: ${err}`);
 //     console.log(`Caught exception: ${err}`);
 //   });

  //  process.on('unhandledRejection', (reason, p) => {
  //    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
      // application specific logging, throwing an error, or other logic here
  //    this._zbot.logBot('Unhandled Rejection at: Promise', p, 'reason:', reason);
 //   });
  }

  /**
   * Gets the Discord bot client
   * @return {ZBot}
   */
  get zbot() {
    return this._zbot;
  }

  /**
   * Event when an channel is created.
   * @param {Channel} channel
   */
  onChannelCreate(channel) {

  }

  /**
   * Event when an channel is deleted.
   * @param {Channel} channel
   */
  onChannelDelete(channel) {

  }

  /**
   * Event when an channel has an update regarding pins inside of it.
   * @param {Channel} channel
   * @param {time} date
   */
  onChannelPinsUpdate(channel, date) {

  }

  /**
   * Event when an channel has is updated.
   * @param {Channel} oldChannel
   * @param {Channel} newChannel
   */
  onChannelUpdate(oldChannel, newChannel) {
    this.zbot.checkChannelUpdate(oldChannel, newChannel)
  }

  /**
   * Event Emitted for general debugging information
   * @param {string} debug
   */
  onDebug(debug) {
    if(! (debug.includes('heartbeat') || debug.includes('Heartbeat') )) {
      console.log(debug);
      this.zbot.logBot(debug);
    }
  }

  /**
   * Event Emitted whenever the client websocket is disconnected
   */
  onDisconnect() {
    console.log('Bot disconnected');
    this.zbot.logBot('Bot disconnected');
  }

  /**
   * Emitted whenever the Client encounters a serious connection error
   * @param {error} error
   */
  onError(error) {
    console.error(error);
    this.zbot.logBot(error.toString());
  }

  /**
   * Event Emitted whenever a member is banned from a guild.
   * @param {guild} guild
   * @param {user} user
   */
  onGuildBanAdd(guild, user) {

  }

  /**
   * Event Emitted whenever a member is unbanned from a guild.
   * @param {guild} guild
   * @param {user} user
   */
  onGuildBanRemove(guild, user) {

  }

  /**
   * Emitted whenever the client (bot) joins a Guild.
   * @param {Guild} guild
   */
  onGuildCreate(guild) {
    this.zbot.newGuildAction(guild);
    this.zbot.logBot('New guild: ' + guild.name);
  }

  /**
   * Emitted whenever a Guild is deleted/left.
   * @param {Guild} guild
   */
  onGuildDelete(guild) {

  }

  /**
   * Emitted whenever an emoji is created
   * @param {Emoji} emoji
   */
  onGuildEmojiCreate(emoji) {

  }

  /**
   * Emitted whenever an emoji is deleted
   * @param {Emoji} emoji
   */
  onGuildEmojiDelete(emoji) {

  }

  /**
   * Emitted whenever an emoji is updated
   * @param {Emoji} oldEmoji
   * @param {Emoji} newEmoji
   */
  onGuildEmojiUpdate(oldEmoji, newEmoji) {

  }

  /**
   * Emitted whenever a user joins a guild.
   * @param {	GuildMember} member
   */
  onGuildMemberAdd(member) {
    // this.zbot.welcomeClientAction(member);
  }

  /**
   * Emitted whenever a member becomes available in a large Guild
   * @param {GuildMember} member
   */
  onGuildMemberAvailable(member) {

  }

  /**
   * Emitted whenever a member leaves a guild, or is kicked.
   * @param {GuildMember} member
   */
  onGuildMemberRemove(member) {
    // this.zbot.leaveClientAction(member);
  }

  /**
   * Emitted whenever a chunk of Guild members is received (all members come from the same guild)
   * @param {Array<GuildMember>} members
   */
  onGuildMembersChunk(members) {

  }

  /**
   * Emitted once a Guild Member starts/stops speaking
   * @param {GuildMember} member
   * @param {boolean} speaking
   */
  onGuildMemberSpeaking(member, speaking) {

  }

  /**
   * Emitted whenever a Guild Member changes - i.e. new role, removed role, nickname
   * @param {GuildMember} oldMember
   * @param {GuildMember} newMember
   */
  onGuildMemberUpdate(oldMember, newMember) {

  }

  /**
   * Emitted whenever a guild becomes unavailable, likely due to a server outage.
   * @param {Guild} guild
   */
  onGuildUnavailable(guild) {
    console.log('Guild became unavailable: ' + guild.name + ' ( '+ guild.id + ' )');
    this.zbot.logBot('Guild became unavailable: ' + guild.name + ' ( '+ guild.id + ' )');
  }

  /**
   * Emitted whenever a guild is updated - e.g. name change.
   * @param oldGuild
   * @param newGuild
   */
  onGuildUpdate(oldGuild, newGuild) {
    this.zbot.updateGuildAction(oldGuild, newGuild);
  }

  /**
   * Emitted whenever a message is created
   * @param {Message} message
   */
  onMessage(message) {
    this.zbot.checkMessageAction(message);
  }

  /**
   * Emitted whenever a message is deleted
   * @param {Message} message
   */
  onMessageDelete(message) {

  }

  /**
   * Emitted whenever message are deleted in bulk
   * @param {Collection<Message>} messages
   */
  onMessageDeleteBulk(messages) {

  }

  /**
   * Emitted whenever a message is updated - e.g. embed or content change.
   * @param {Message} oldMessage
   * @param {Message} newMessage
   */
  onMessageUpdate(oldMessage, newMessage) {
    this.zbot.checkMessageAction(newMessage);
  }

  /**
   * Emitted whenever a guild member's presence changes, or they change one of their details.
   * @param {GuildMember} oldMember
   * @param {GuildMember} newMember
   */
  onPresenceUpdate(oldMember, newMember) {

  }

  /**
   * Emitted when the Client becomes ready to start working
   */
  onReady() {
    console.log(`Ready to serve in ${this.zbot.bot.channels.cache.size} channels on ${this.zbot.bot.guilds.cache.size} servers, for a total of ${this.zbot.bot.users.cache.size} users.`);
    this.zbot.logBot('Bot ready event');
    this.zbot.logBot(`Ready to serve in ${this.zbot.bot.channels.cache.size} channels on ${this.zbot.bot.guilds.cache.size} servers, for a total of ${this.zbot.bot.users.cache.size} users.`);
    this.zbot.setBotPlayingState(this.zbot.cfg.defaultPlayingStatus);
    this.zbot.initAfterReady();
  }

  /**
   * Emitted when the Client tries to reconnect after being disconnected
   */
  onReconnecting() {
    console.log('Bot disconnected from discord API. Trying to reconnect.');
    this._zbot.logBot('Bot disconnected from discord API. Trying to reconnect.');
  }

  /**
   * Emitted whenever a role is created.
   * @param {Role} role
   */
  onRoleCreate(role) {

  }

  /**
   * Emitted whenever a role is deleted.
   * @param {Role} role
   */
  onRoleDelete(role) {

  }

  /**
   * Emitted whenever a role is deleted.
   * @param {Role} oldRole
   * @param {Role} newRole
   */
  onRoleUpdate(oldRole, newRole) {

  }

  /**
   * Emitted whenever a user starts typing in a channel
   * @param {Channel} channel
   * @param {User} user
   */
  onTypingStart(channel, user) {

  }

  /**
   * Emitted whenever a user stops typing in a channel
   * @param {Channel} channel
   * @param {User} user
   */
  onTypingStop(channel, user) {

  }

  /**
   * Emitted whenever a user's details (e.g. username) are changed.
   * @param {User} oldUser
   * @param {User} newUser
   */
  onUserUpdate(oldUser, newUser) {

  }

  /**
   * Emitted whenever a user changes voice state - e.g. joins/leaves a channel, mutes/unmutes.
   * @param {GuildMember} oldMember
   * @param {GuildMember} newMember
   */
  onVoiceStateUpdate(oldMember, newMember) {

  }

  /**
   * Emitted for general warnings
   * @param {string} warning
   */
  onWarn(warning) {
    console.log(warning);
    this._zbot.logBot(warning);
  }
}

module.exports = ZBotEvents;