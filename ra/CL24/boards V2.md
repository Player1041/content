---
title: Challenge League 2024
tags:
  - RetroAchievements
---
# What is Challenge League?
Challenge League: Ticket to the Universe is an event run on [RetroAchievements](https://retroachievements.org) in where you have a whole month to complete 9 "Choose Your Own Adventure" style game boards. Every month, a new board releases with a new theme to it. For example, Board 1 requires playing games within certain genres, whereas Board 2 requires playing games with protagonists within certain categories.

## My Current Progress


# Games to Assign
## Suggestions
**The Incredible Hulk: Ultimate Destruction** - PS2
**Katamari Damacy** - PS2
**Ys: The Oath in Felghana** - PSP
**Mr. Karaoshi** - PSP
**Archer Maclean's Mercury** - PSP
**Dr. Mini Games** - PSP
**Hungry Giraffe** - PSP (I'm mastering this no doubts)
**Black Rock Shooter: The Game** - PSP
**Platypus** - PSP
**Widgets Odyssey** - PSP
**Widgets Odyssey 2** - PSP
**Coraline** - DS
**The House of the Dead 2** - Dreamcast
**Roll Away** - PSX
**Chibi-Robo** - GameCube
**Dance Dance Revolution: Mario Mix** - GameCube
**Mario Kart: Double Dash!!** - GameCube
**F-Zero GX** - GameCube
**PN03** - GameCube
**Pikmin** - GameCube
**Ridge Racer 4** - PSX
**Need for Speed: UG2** - PS2
**Need for Speed: Carbon** - PS2


## Personal Wishlist
**The Simpsons: Hit & Run** - PS2
**Viewtiful Joe** - GameCube
**Magical Mirror featuring Mickey Mouse** - GameCube
**Arcade Bowling** - DSi
**Half-Life** - PS2
**Toy Story 3** - PSP
**Barnyard** - GameCube


# Board 1 - January
### Theme: [Genres and Subgenres](https://retroachievements.org/game/9553)
## Image

![[b1j.png | 250]]

## Board 1 Games

~~~dataviewjs
const api_key = 'PVDnPdtXTW6QsC4gKI0OnYDiQJS0NjRb';
let game_id = 0;
const game_id_list = [
17160, // Moorhuhn Kart - Mastered
2543, // Konami Krazy Racers - Beaten Hardcore
28548 // Loopover - Mastered
];
let game_data = null;
let games_completed = 0;
kv.set("board1_complete", false);
for(game_id of game_id_list) {
	game_data = await requestUrl("https://retroachievements.org/API/API_GetGameInfoAndUserProgress.php?z=player1041&y=" + api_key + "&g=" + game_id + "&u=player1041&a=1");
	

	if(game_data.json.HighestAwardKind == "mastered") {
		dv.paragraph(` - [x] **${game_data.json.Title}** - ${game_data.json.ConsoleName}`);
		games_completed++;
	} else if(game_data.json.HighestAwardKind == "beaten-hardcore") {
		dv.paragraph(` - [x] **${game_data.json.Title}** - ${game_data.json.ConsoleName}`);
		games_completed++;
	} else {
		dv.paragraph(` - [ ] **${game_data.json.Title}** - ${game_data.json.ConsoleName}`);
		}
}

if(games_completed == game_id_list.length) {
	kv.set("board1_complete", true);
	kv.set("completed_boards", kv.get("completed_boards") + 1);
	dv.paragraph("Board 1 Complete!");
} else {
	dv.paragraph(`${games_completed}/${game_id_list.length} Completed`);
}
~~~
# Board 2 - February
### Theme: [Protagonist](https://retroachievements.org/game/5962)
## Image

![[b2f.png|280]]

## Board 2 Games


# Board 3 - March
### Theme: [Themes](https://retroachievements.org/game/5917)
## Image

![[b3m.png|340]]

## Board 3 Games

# Board 4 - May
### Theme: [Series](https://retroachievements.org/game/5771)
## Image

![[b4m.png|350]]

## Valid Games

![[b4allgames.png|250]]

## Board 4 Games
- [ ] **Stage 1** - Spyro the Dragon - PSX - N/A - N/A
	- **Spyro the Dragon**
	- Tomb Raider
	- Grand Theft Auto
- [ ] **Stage 2** - Crash Team Racing - PSX - N/A - N/A
	- **Crash Bandicoot**
	- Castlevania
	- Street Fighter
- [ ] **Stage 3** - Yoshi's Topsy Turvy - GBA - N/A - N/A
	- **Yoshi**
	- Mortal Kombat
	- Bomberman 
- [ ] **Stage 4** - Super Mario Bros. - NES - N/A - N/A
	- Id Shooter
	- Kingdom Hearts
	- **Super Mario**
- [ ] **Stage 5** - Pokémon Ruby - GBA - N/A - N/A
	- Donkey Kong
	- **Pokémon**
	- Mega Man
- [ ] **Wildcard** - 

# Board 5 - June
### Theme: [Hacks](https://retroachievements.org/game/6225) & [Homebrews](https://retroachievements.org/game/2513)
## Image

![[b5j.png|250]]

**Slippy** - Fovoham
**Lesalia** - Dr. Light
**Zeltennia** - Cid 
**Limberry** - Lucca
**Lionel** - Gordon
**Airship Graveyard** - Ultima

## Board 5 Games

- [ ] **H - Cid**
	- Final Fantasy
	- Zelda
	- Hacks feat. Cameos
- [ ] **HB - Sony Consoles** -
- [ ] **H - Dr. Light**
	- Mega Man
	- Sonic
	- Fighters
- [ ] **HB - Nintendo Handheld**
- [ ] **H - Ratchet**
	- Pokémon
	- Donkey Kong Country
	- Hacks feat. Duos
- [ ] **HB- console title** -
	- Colecovision
	- Intellivision
	- Magnevox Odyssey 2
- [ ] **H - Ultima Wildcard**

# Board 6 - July
## Theme: [Console Generations](https://retroachievements.org/gameList.php)
## Image

![[b6j.png|250]]

## Console List
![[b6allgen.png|200]]
## Board 6 Games
- [ ] 
- [ ] 
- [ ] 

~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 6 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 6**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~
# Board 7 - September
## Theme:
## Image

![[]]

## Console List

## Board 7 Games
- [ ] 
- [ ] 
- [ ] 

~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 7 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 7**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~
# Board 8 - October
## Theme:
## Image

![[]]

## Console List

## Board 8 Games
- [ ] 
- [ ] 
- [ ] 


~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 8 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 8**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~
# Board 9 - November
## Theme:
## Image

![[]]

## Console List

## Board 9 Games
- [ ] 
- [ ] 
- [ ] 

~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 9 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 9**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~