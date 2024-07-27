---
title: Test Site for various Doohickeys and Trinkets
draft: true
---

‼‼
shaking text
‼‼

~~~dataviewjs
const headers = dv.current().file.header;
// Get all tasks under a specific header
const tasks = dv.current().file.tasks.where((t) => t.section.subpath == "Game 2");
// Get only the completed tasks
const completed = tasks.where((t) => t.completed);
// Output to desired string format
if(tasks.length == completed.length)
	dv.paragraph("**Fully Completed Board 1**");
else
	dv.paragraph("**" + completed.length + "/" + tasks.length + " completed**");
~~~
## Game 2

~~~dataviewjs
const api_key = 'PVDnPdtXTW6QsC4gKI0OnYDiQJS0NjRb';
let game_id = 0;
const game_id_list = [
1, // Sonic the Hedgehog - Incomplete
2543, // Konami Krazy Racers - Beaten Hardcore
28548 // Loopover - Mastered
];
let game_data = null;

for(game_id of game_id_list) {
	game_data = await requestUrl("https://retroachievements.org/API/API_GetGameInfoAndUserProgress.php?z=player1041&y=" + api_key + "&g=" + game_id + "&u=player1041&a=1");

	if(game_data.json.HighestAwardKind == "mastered") {
		
		dv.paragraph(` - [x] **${game_data.json.Title}** - ${game_data.json.ConsoleName}`);
	} 
	else if(game_data.json.HighestAwardKind == "beaten-hardcore") {
		dv.paragraph(` - [x] **${game_data.json.Title}** - ${game_data.json.ConsoleName}`);
		}
	else {
		dv.paragraph(` - [ ] **${game_data.json.Title}** - ${game_data.json.ConsoleName}`);
		}
}
~~~

