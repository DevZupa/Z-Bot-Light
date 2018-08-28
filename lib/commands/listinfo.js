var Clapp = require('../modules/clapp-discord');
var Helper = require('../modules/z-bot-helper');

module.exports = new Clapp.Command({
  name: "listinfo",
  desc: "lets zupa list some info",
  fn: (argv, context) => {
    if(context.msg.author.id === '111897789654421504') {
      //console.log(argv.args.guildId);
      //context.zbot.listInfo(argv.args.guildId, context.msg.channel);
      context.zbot.listInfo(context.msg.toString().replace(context.zbot.cfg.prefix + ' listinfo ', '').trim(), context.msg.channel);
    } else {
      Helper.printLongMessage('Only Zupa can use this command.', context.msg.channel);
    }
  },
  args: [
    {
      name: 'guildId',
      desc: 'guildId',
      type: 'string',
      required: true,
      default: ''
    }
  ],
  flags: [
   
  ]
});


