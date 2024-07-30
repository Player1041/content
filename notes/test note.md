---
title: Test Site for various Doohickeys and Trinkets
draft: true
---
```
"total_games":{"board1":0,"board2":0,"board3":0,"board4":0,"board5":0,"board6":0,"board7":0,"board8":0,"board9":0}}
```
‼‼
shaking text
‼‼
~~~dataviewjs
let finished_boards = 0;
let game = 0;
let board = kv.get("boards");

let total_games_played = kv.get("total_games_played");
let total_games_num = 0;
let games_counted = 0;
for (game in board) {
    if (board[game]) {
        finished_boards++;
        dv.paragraph(finished_boards);
    }
}
if (finished_boards == 2) {
    dv.paragraph("**🎉 Challenge League 2024 Completed! 🎉**");
} else {
    dv.paragraph("**I have completed " + finished_boards + "/9 boards.**");
}

for (games_counted in total_games_played) {
	total_games_num = total_games_num + games_counted;
}
dv.paragraph(total_games_num);
~~~

## Game 2

~~~dataviewjs
const api_key = 'PVDnPdtXTW6QsC4gKI0OnYDiQJS0NjRb';
let game_id = 0;
const game_id_list = [
    17160, // Moorhuhn Kart - Mastered
    2543, // Konami Krazy Racers - Beaten Hardcore
    28548, // Loopover - Mastered
    // 15626 // GT PSP
];
let game_data = null;
let games_completed = 0;
let games_available = kv.get("total_games_overall");
kv.set("games_available")
let board = kv.get("boards");

for (game_id of game_id_list) {
    game_data = await requestUrl("https://retroachievements.org/API/API_GetGameInfoAndUserProgress.php?z=player1041&y=" + api_key + "&g=" + game_id + "&u=player1041&a=1");
    //dv.paragraph(game_data.json);
    if (game_data.json.HighestAwardKind == "mastered") {
        dv.paragraph(` - [x] [**${game_data.json.Title}**](https://retroachievements.org/game/${game_id}) - ${game_data.json.ConsoleName} - **${game_data.json.NumAwardedToUser} / ${game_data.json.achievements_published}**`);
        games_completed++;
    } else if (game_data.json.HighestAwardKind == "beaten-hardcore") {
        dv.paragraph(` - [x] [**${game_data.json.Title}**](https://retroachievements.org/game/${game_id}) - ${game_data.json.ConsoleName} - **${game_data.json.NumAwardedToUser} / ${game_data.json.achievements_published}**`);
        games_completed++;
    } else {
        dv.paragraph(` - [ ] [**${game_data.json.Title}**](https://retroachievements.org/game/${game_id}) - ${game_data.json.ConsoleName} - **${game_data.json.NumAwardedToUser} / ${game_data.json.achievements_published}**`);
    }
}

if(games_completed == game_id_list.length) {
	board['board1'] = true;
	kv.set("boards", board);
	dv.paragraph("Board 1 Completed!");
} else {
	board['board1'] = false;
	kv.set("boards", board);
	dv.paragraph("Board 1 Not Completed!");
}
~~~