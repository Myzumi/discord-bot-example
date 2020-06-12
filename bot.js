// Defines the bot and discord package
const discord = require("discord.js");
const client = new discord.Client();

// Gets the config from the files
const config = require('./config.json')

// Gets the .env config to be used
require('dotenv').config()

//  Defines the status of a bot, __ is a placeholder and can be ignored
client.on("ready", (__) => {

    client.user.setActivity('A New Bot!')

})

// Hearing on messages
client.on("message", async (message) => {

    // Remove the // in the following comment will make the bot ignore dm messages
    if(message.channel.type == "dm") return

    // Define args that you can use for example !say hello, NOTE: args always starts at 0
    const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);

    // Defines "command" for exaple !ping
    const command = args.shift().toLowerCase();

    // If its not start with the prefix, ignore the message
    if (!(message.content.startsWith(config.prefix))) return

    // Ping command
    if (command == "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(
          `Pong! Latency is ${
            m.createdTimestamp - message.createdTimestamp
          }ms. API Latency is ${Math.round(client.ws.ping)}ms`
        );
      }

      // a Simple command that replys to a command
      
      if (command == 'hello') /* if the command is !hello */{

        // gets the message author and defines it in author
        let author = message.author
        
        // Reply to the message (tag the user) and says hello
        message.reply('Hello')
      }


})

// This will login the client with the token defined in .env
client.login(process.env.TOKEN);


/*

!WARNING! This requires Node.js installed, download can be found here: https://nodejs.org/en/download/

To get startet, Change the token in .env file to your token

Now open a console (if in Visual studo, hit f1 and type new int and there should be a option to create a new console) and do the following commands:

npm i 
To install all required packages

npm init
Follow what the console says and at the piont where its asking for a test command, type the following in the console:
node bot.js

after that you can change the prefix in the config file (if you want)

To start the bot do the following in the console:

npm test

*/