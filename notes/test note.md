---
title: Test Site for various Doohickeys and Trinkets
draft: true
---

‼‼
shaking text
‼‼
~~~dataviewjs
const headers = dv.current().file.header;
let finished_boards = 0;
let game = 0;

let board = kv.get("boards");
dv.span(board);

for (game in kv.get("boards")) {
    if (kv.get("boards" [`board${game}`]) == true) {
        dv.paragraph(kv.get("boards" [`board${game}`]));
        finished_boards++;
        dv.paragraph(finished_boards);
    }
}
if (finished_boards == 2) {
    dv.paragraph("**🎉 Challenge League 2024 Completed! 🎉**");
} else {
    dv.paragraph("**I have completed " + finished_boards + "/9 boards.**");
}
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

let board = kv.get("boards");
board['board1'] = true;
kv.set("boards", board);
dv.span(board);

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
dv.span(games_completed);
dv.span(game_id_list.length);
if (games_completed == game_id_list.length) {
	dv.span('in')
    if (board['board1']) {
	    dv.span('in?')
		board['board1'] = true;
		kv.set("boards", board);
        dv.paragraph("Board 1 Complete!");
    }
} else {
	dv.span('out');
    dv.paragraph(`${games_completed}/${game_id_list.length} Completed`);
    board['board1'] = false;
	kv.set("boards", board);
}
~~~