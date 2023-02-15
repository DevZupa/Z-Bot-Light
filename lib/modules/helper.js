"use strict";

const { ChannelType } = require("discord.js");
const { EmbedBuilder } = require('discord.js');

/**
 * Class that contains Helper functions
 */
class Helper {

  /**
   * Helper constructor
   **/
  constructor() {}

  /**
   * Does some checks before sending a text message
   * @param {GuildChannel} channel
   * @param {string} text
   */
  static sendTextMessage(channel, text) {
    if (channel) {
      if(channel.type === ChannelType.GuildText) {
        channel.send(text);
      } else {
        console.log('Not a text channel', channel.guild.name, channel.guild.id, channel.name);
      }
    } else {
      console.log('No channel found for text:', text);
    }
  }

  /**
   * Converts an object to a string.
   * @param {Object|JSON|array|null} object
   * @param {Channel} channel
   */
  static printObject(object, channel) {
    Helper.printLongMessage(JSON.stringify(object, null, 2), channel);
  }

  /**
   * Prints a long message. Discord has a max of 2000 chars per message. BUt we bundle them to the max cus there is also a max messages per second.
   * @param {string} text
   * @param {Channel} channel
   */
  static printLongMessage(text, channel) {
    if(text && typeof text === 'string') {
      if (text.length <= 2000) {
        Helper.sendTextMessage(channel, text);
      } else {
        let bundledMessage = '';
        let newBundledMessage = '';
        let messages = text.split(/\r?\n/);
        if(messages.length === 1) {
          // 1 long text without newlines...
          // Just split it by the max number. ( 2000 )
          messages = text.match(/.{1,1999}/g);
        }
        messages.forEach((textLine, index) => {
          newBundledMessage = newBundledMessage + textLine + '\n';
          if (newBundledMessage.length > 2000) {
            Helper.sendTextMessage(channel, bundledMessage);
            bundledMessage = textLine + '\n';
            newBundledMessage = textLine + '\n';
          } else {
            bundledMessage = bundledMessage + textLine + '\n';
          }

          if (index === (messages.length - 1)) {
            Helper.sendTextMessage(channel, bundledMessage);
          }
        });
      }
    }
  }

  /**
   * Prints a long message. Discord has a max of 2000 chars per message. BUt we bundle them to the max cus there is also a max messages per second.
   * @param {string} text
   * @param {Channel} channel
   */
  static printLongMarkupMessage(text, channel) {
    if(text.length <= 1980) {
      Helper.sendTextMessage(channel, '```Markdown\n' + text + '\n```');
    } else {
      let bundledMessage = '';
      let newBundledMessage = '';
      let messages = text.split(/\r?\n/);
      messages.forEach((textLine, index) => {
        newBundledMessage = newBundledMessage + textLine + '\n';
        if(newBundledMessage.length > 1980) {
          Helper.sendTextMessage(channel,'```Markdown\n' + bundledMessage + '```');
          bundledMessage = textLine + '\n';
          newBundledMessage = textLine + '\n';
        } else {
          bundledMessage = bundledMessage + textLine + '\n';
        }

        if(index === (messages.length - 1)) {
          Helper.sendTextMessage(channel, '```Markdown\n' + bundledMessage + '```')
        }
      });
    }
  }

  /**
   * Prints a long message. Discord has a max of 2000 chars per message. BUt we bundle them to the max cus there is also a max messages per second.
   * @param {string} text
   * @param {Channel} channel
   */
  static printLongQuotedMessage(text, channel) {
    if(text.length <= 1980) {
      Helper.sendTextMessage(channel, '```\n' + text + '\n```');
    } else {
      let bundledMessage = '';
      let newBundledMessage = '';
      let messages = text.split(/\r?\n/);
      messages.forEach((textLine, index) => {
        newBundledMessage = newBundledMessage + textLine + '\n';
        if(newBundledMessage.length > 1980) {
          Helper.sendTextMessage(channel,'```\n' + bundledMessage + '```');
          bundledMessage = textLine + '\n';
          newBundledMessage = textLine + '\n';
        } else {
          bundledMessage = bundledMessage + textLine + '\n';
        }

        if(index === (messages.length - 1)) {
          Helper.sendTextMessage(channel, '```\n' + bundledMessage + '```')
        }
      });
    }
  }

  static guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  /**
   * Does some checks before sending a text message
   * @param {GuildChannel} channel
   * @param {string} text
   */
  static sendEmbedMessage(channel, embed) {
    if (channel) {
      if(channel.type === ChannelType.GuildText) {
        channel.send({embeds: [embed]});
      } else {
        console.log('Not a text channel', channel.guild.name, channel.guild.id, channel.name);
      }
    } else {
      console.log('No channel found for text:', text);
    }
  }
}



module.exports = Helper;



