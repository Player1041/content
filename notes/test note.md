---
title: Test Site for various Doohickeys and Trinkets
draft: true
---

‼‼
shaking text
‼‼
~~~dataviewjs
const headers = dv.current().file.header;
if(kv.get("completed_boards") == 2) {
	dv.paragraph("**🎉 Challenge League 2024 Completed! 🎉**");
	} else {
	dv.paragraph("**I have completed " + kv.get("completed_boards") + "/9 boards.**");
	}
~~~

## Game 2

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