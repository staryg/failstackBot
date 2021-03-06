'use strict';
var Discord = require('discord.js');
var client = new Discord.Client();

var config = require('../json/config.json');
var sheetData = require('../json/sheetData.json');
var resp = require('../json/responses.json');

exports.run = (client, message, params) => {
	// E = Enhance, R = Repair/replace, D = re-enhance (degrade part),
	var itemName = params[0];
	var enhanceWanted = params[1];

	var a = sheetData.values[[0]];
	var sheetItemName = a.indexOf(itemName); // Base name index location.
	if (sheetItemName == -1) {
		message.reply('Command not formatted correctly.')
			.then(msg => console.log())
			.catch(console.error);
	}
	else {
		var sheetFailstackIndex = a.slice(sheetItemName)
			.indexOf(enhanceWanted);
		console.log(sheetFailstackIndex);
		message.reply()
			.then(msg => console.log(`${msg}`))
			.catch(console.error);
	}
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: ['h', 'halp'],
	permLevel: 0
};

exports.help = {
	name: 'help',
	description: 'Displays all the available commands for your permission level.',
	usage: 'help [command]'
};
