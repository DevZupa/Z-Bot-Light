const Clapp = require("../modules/clapp");
const Helper = require('../modules/helper');

module.exports = new Clapp.Command({
  name: "maker",
  desc: "displays the maker",
  fn: (argv, context) => {
      return 'All this love comes from Zupa!';
  },
  args: [

  ],
  flags: [
   
  ]
});
