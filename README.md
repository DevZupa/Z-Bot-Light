# ZBot
> Experimental selfhosted rcon bot that connects with Discord.

## Prerequisite

* [NodeJS](https://nodejs.org/en/)
* [Git](https://nodejs.org/en/) ( Only if you clone the repository, you can do it without git if you download the ZIP )

NodeJS Version LTS (8.11.4) should be enough and stable.

Currently only tested on Mac & Linux but this version should work on windows.

## Installation

Clone this repository OR just download the ZIP and unpack it somewhere you want it.
```sh
git clone https://github.com/Windmolders/Z-Bot-Light.git
``` 

Open a terminal or CMD and navigate to the folder of the Node program. ( CD .. )

and run:
```sh
npm install
```

Fill in the [config.js](https://github.com/DevZupa/ZBot-Discord/blob/master/config.js) file to fit your server.

If you don't know your [guild id?](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)

Create a [discord app](https://discordapp.com/developers/applications/me) and fill in the key for your bot in the [config.js](https://github.com/DevZupa/Z-Bot-Light/blob/master/config.js).

NEW: at the tab "Privileged Gateway Intents" check all INTENTS for the bot to be able to connect and read your server.

Invite your bot to your Discord server. 
```js
https://discordapp.com/oauth2/authorize?client_id=YOURBOTID&scope=bot&permissions=66321471
```

## Usage

In your project folder in a Terminal or CMD window

```sh
npm run bot
```

## License

MIT © [Jonas Windmolders](https://github.com/Windmolders)
