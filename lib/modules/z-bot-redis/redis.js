"use strict";

/**
 * Class that contains all redis events.
 */
class ZBotRedis {

  /**
   *
   * @param {redis} redisNode
   * */
  constructor(redisNode) {
    /**
     * @type RedisClient
     */
    this._db = null;

    this._redisNode = redisNode;

    this.open();
    this.addEvents();
  }

  /**
   * Returns redis client object.
   * @returns {RedisClient}
   */
  get db() {
    return this._db;
  }

  addEvents() {
    // this._db.on("error", function (err) {
    //   console.log("Redis error " + err);
    // });
  }

  open() {
   //  this._db = this._redisNode.createClient({socket_keepalive : false});
  }

  close() {
    this._db.quit();
  }

}

module.exports = ZBotRedis;



