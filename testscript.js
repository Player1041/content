const api_key = 'PVDnPdtXTW6QsC4gKI0OnYDiQJS0NjRb';
let mdb = engine.markdown.createBuilder();
let game_id = 0;
// Games to search for
const game_id_list = [
    17160, // Moorhuhn Kart
    2543, // Konami Krazy Racers
    28548, // Loopover
    "Skip",
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
	if (game_id == "Skip") {
	mdb.createParagraph(' - [x] **Skip**');
	} else {
	    game_data = await requestUrl("https://retroachievements.org/API/API_GetGameInfoAndUserProgress.php?z=player1041&y=" + api_key + "&g=" + game_id + "&u=player1041&a=1");
	    //dv.paragraph(game_data.json);
	    if (game_data.json.HighestAwardKind == "mastered") {
	        console.log(mdb.createParagraph(` - [x] [**${game_data.json.Title}**](https://retroachievements.org/game/${game_id}) - ${game_data.json.ConsoleName} - **${game_data.json.NumAwardedToUser} / ${game_data.json.achievements_published}**`));
	        games_completed++;
	    } else if (game_data.json.HighestAwardKind == "beaten-hardcore") {
	        mdb.createParagraph(` - [x] [**${game_data.json.Title}**](https://retroachievements.org/game/${game_id}) - ${game_data.json.ConsoleName} - **${game_data.json.NumAwardedToUser} / ${game_data.json.achievements_published}**`);
	        games_completed++;
	    } else {
	        mdb.createParagraph(` - [ ] [**${game_data.json.Title}**](https://retroachievements.org/game/${game_id}) - ${game_data.json.ConsoleName} - **${game_data.json.NumAwardedToUser} / ${game_data.json.achievements_published}**`);
	    }
    }
}

if(games_completed == game_id_list.length) {
	board['board1'] = true;
	kv.set("boards", board);
	mdb.createParagraph("Board 1 Completed!");
} else {
	board['board1'] = false;
	kv.set("boards", board);
	mdb.createParagraph("Board 1 Not Completed!");
}
games_played["board1"] = games_completed;
kv.set("games_played", games_played);
console.log('chump');
return mdb;