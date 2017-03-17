var database = 
{
	meetings: [
		{id: 1, room_number: "A001", capacity: 12, available: true, features: "Projectors, Personalized workspaces, Wifi, lounge"},
		{id: 2, room_number: "A002", capacity: 20, available: true, features: "Safety Exit, Conference Table, Video call facitilies, Team cubicles"},
		{id: 3, room_number: "A003", capacity: 25, available: true, features: "Safety Exit, Conference Table, Video call facitilies, Team cubicles"},
		{id: 4, room_number: "A004", capacity: 9, available: true, features: "Projectors, Unit computers, Whiteboards, Team cubicles"}
	], 
	games:[ 
		{id: 1, room_number: "B001", capacity: 10,  available: true,  features: "PS4, XBOX 360, Chess"},
		{id: 2, room_number: "B002", capacity: 15,  available: true,  features: "PS4, XBOX 360, Chess, Scrabble, Monopoly"}
	],

	quiet_time : [
		{id: 1, room_number: "C001", capacity: 25,  available: true,  features: "Inspirational Books, Magazines"},
		{id: 2, room_number: "C002", capacity: 20,  available: true,  features: "Inspirational Books, Magazines"}
	],

	learning:[ 
		{id: 1, room_number: "D001", capacity: 50,  available: true,  features: "Books on Technology, Programming, Software Development, Computer,Wifi"},
		{id: 2, room_number: "D002", capacity: 30,  available: true,  features: "Books on Technology, Programming, Software Development, Computer,Wifi"},
		{id: 3, room_number: "D003", capacity: 20,  available: true,  features: "Books on Technology, Programming, Software Development, Computer,Wifi"}
	],
	working:[	
		{id: 1, room_number: "E001", capacity: 50,  available: true,  features: "Computers, Wifi, Cubicles"},
	    {id: 2, room_number: "E002", capacity: 30,  available: true,  features: "Computers, Wifi, Cubicles"},
	 	{id: 3, room_number: "E003", capacity: 25,  available: true,  features: "Computers, Wifi, Cubicles"},
	 	{id: 4, room_number: "E004", capacity: 20,  available: true,  features: "Computers, Wifi, Cubicles"}
	]
};

module.exports = {database};