---
title: Challenge League 2024
tags:
  - RetroAchievements
---
# What is Challenge League?
Challenge League: Ticket to the Universe is an event run on [RetroAchievements](https://retroachievements.org) in where you have a whole month to complete 9 "Choose Your Own Adventure" style game boards. Every month, a new board releases with a new theme to it. For example, Board 1 requires playing games within certain genres, whereas Board 2 requires playing games with protagonists within certain categories.

## My Current Progress


~~~dataviewjs
const headers = dv.current().file.header;
let completedBoards = 0;

// Get all boards
const board1 = dv.current().file.tasks.where((t) => t.section.subpath == "Board 1 Games");
const board2 = dv.current().file.tasks.where((t) => t.section.subpath == "Board 2 Games");
const board3 = dv.current().file.tasks.where((t) => t.section.subpath == "Board 3 Games");
const board4 = dv.current().file.tasks.where((t) => t.section.subpath == "Board 4 Games");
const board5 = dv.current().file.tasks.where((t) => t.section.subpath == "Board 5 Games");
const board6 = dv.current().file.tasks.where((t) => t.section.subpath == "Board 6 Games");
const board7 = dv.current().file.tasks.where((t) => t.section.subpath == "Board 7 Games");
const board8 = dv.current().file.tasks.where((t) => t.section.subpath == "Board 8 Games");
const board9 = dv.current().file.tasks.where((t) => t.section.subpath == "Board 9 Games");

// Get all tasks
const completed1 = board1.where((t) => t.completed);
const completed2 = board2.where((t) => t.completed);
const completed3 = board3.where((t) => t.completed);
const completed4 = board4.where((t) => t.completed);
const completed5 = board5.where((t) => t.completed);
const completed6 = board6.where((t) => t.completed);
const completed7 = board7.where((t) => t.completed);
const completed8 = board8.where((t) => t.completed);
const completed9 = board9.where((t) => t.completed);

if(board1.length == completed1.length)
	completedBoards++;
if(board2.length == completed2.length)
	completedBoards++;
if(board3.length == completed3.length)
	completedBoards++;
if(board4.length == completed4.length)
	completedBoards++;
if(board5.length == completed5.length)
	completedBoards++;
if(board6.length == completed6.length)
	completedBoards++;
if(board7.length == completed7.length)
	completedBoards++;
if(board8.length == completed8.length)
	completedBoards++;
if(board9.length == completed9.length)
	completedBoards++;
if(completedBoards == 9)
	dv.paragraph("**🎉 Challenge League 2024 Completed! 🎉**");

else
	dv.paragraph("**I have completed " + completedBoards + "/9 boards.**");
~~~

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

## Personal Wishlist
**The Simpsons: Hit & Run** - PS2
**Half Life** - PS2
**Viewtiful Joe** - GameCube
**Magical Mirror featuring Mickey Mouse** - GameCube
**Arcade Bowling** - DSi
**Half-Life** - PS2


# Board 1 - January
### Theme: [Genres and Subgenres](https://retroachievements.org/game/9553)
## Image

![[b1j.png | 250]]

## Board 1 Games
- [ ] **Kart Racing** - Moorhuhn Kart - PSX - 9th January - 2h 44m
- [ ] **2D Platforming** - Drawn to Life: SpongeBob Edition - NDS - 29th February - 11h 45m
- [ ] **3D Fighting** - Skipped - N/A - N/A - N/A
- [ ] **Action** - 
- [ ] **Wildcard** -
- [ ] **Educational** -
- [ ] **Run and Gun** -

~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 1 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 1**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~

# Board 2 - February
### Theme: [Protagonist](https://retroachievements.org/game/5962)
## Image

![[b2f.png|280]]

## Board 2 Games
- [ ] **Thief** -
- [ ] **Alien** -
- [ ] **Wildcard** -
- [ ] **Clown** - Skipped - N/A - N/A - !LA
- [ ] **Detective** -
- [ ] **Female** -
- [ ] **Wildcard** - Cut the Rope - DSi - 15th February - ?h ?m

~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 2 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 2**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~
~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 1 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 1**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~

# Board 3 - March
### Theme: [Themes](https://retroachievements.org/game/5917)
## Image

![[b3m.png|340]]

## Board 3 Games
- [ ] **Cameo/Crossover** - Konami Krazy Racers - GBA - 28th May - ?h ?m
- [ ] **Post-Apocalyptic** - Skipped - N/A - N/A - N/A
- [ ] **Canines** - Wappy Dog - DS - 20th April - 4/5h 0m
- [ ] **Wildcard Portal** - Hello Kitty no Magical Museum - GBC - 6th March - 28m
- [ ] **Wildcard Dracula** - Looney Tunes: Space Race - Dreamcast - 3rd March - 4/5h 0m

~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 3 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 3**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~
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

~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 4 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 4**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~
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

~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Board 5 Games");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 5**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~
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