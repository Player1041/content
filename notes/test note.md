---
title: Test Site for various Doohickeys and Trinkets
draft: true
---
```
{
  "boards": {
    "board1": true,
    "board2": false,
    "board3": false,
    "board4": false,
    "board5": false,
    "board6": false,
    "board7": false,
    "board8": false,
    "board9": false
  },
  "games_played": {
    "board1": 0,
    "board2": 0,
    "board3": 0,
    "board4": 0,
    "board5": 0,
    "board6": 0,
    "board7": 0,
    "board8": 0,
    "board9": 0
  },
  "total_games": {
    "board1": 3,
    "board2": 0,
    "board3": 0,
    "board4": 0,
    "board5": 0,
    "board6": 0,
    "board7": 0,
    "board8": 0,
    "board9": 0
  }
}
```
‼‼
shaking text
‼‼
~~~dataviewjs
let finished_boards = 0;
let game = 0;
let board = kv.get("boards");

let games_total = kv.get("total_games");
let games_total_counted = 0;
let x = 0;

let games_played  = kv.get("games_played");
let games_played_counted = 0;
let y = 0;

for (game in board) {
    if (board[game]) {
        finished_boards++;
    }
}
if (finished_boards == 2) {
    dv.paragraph("**🎉 Challenge League 2024 Completed! 🎉**");
} else {
    dv.paragraph("**I have completed " + finished_boards + "/9 boards.**");
}


dv.span(games_total);
for(let game in games_total) {
	games_total_counted = games_total_counted + games_total[game];
}

for(let game in games_played) {
	games_played_counted = games_played_counted + games_played[game];
}

dv.paragraph(`Overview: ${games_played_counted}/${games_total_counted}`);
~~~

## Game 2

~~~dataviewjs
const api_key = 'PVDnPdtXTW6QsC4gKI0OnYDiQJS0NjRb';
let game_id = 0;
// Games to search for
const game_id_list = [
    17160, // Moorhuhn Kart
    2543, // Konami Krazy Racers
    28548, // Loopover
    15626 // GT PSP
];
let game_data = null;
// used for games counter
let games_completed = 0;
let games_total = kv.get("total_games");
games_total["board1"] = game_id_list.length;
kv.set("total_games", games_total);

let games_played  = kv.get("games_played");
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
games_played["board1"] = games_completed;
kv.set("games_played", games_played);
~~~