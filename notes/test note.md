---
title: Test Site for various Doohickeys and Trinkets
draft: true
---

‼‼
shaking text
‼‼
~~~dataviewjs
const headers = dv.current().file.header;
let completedBoards = 0;

// Get all boards
const board1 = dv.current().file.tasks.where((t) => t.section.subpath == "Game 2" );
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
## Game 2

~~~dataviewjs
const api_key = 'PVDnPdtXTW6QsC4gKI0OnYDiQJS0NjRb';
let game_id = 0;
const game_id_list = [
7224, // Sonic the Hedgehog - Incomplete
2543, // Konami Krazy Racers - Beaten Hardcore
28548 // Loopover - Mastered
];
let game_data = null;
let games_completed = 0;
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
	dv.paragraph("Board 1 Complete!");
} else {
	dv.paragraph(`${games_completed}/${game_id_list.length} Completed`);
}
~~~

