---
title: Test Site for various Doohickeys and Trinkets
draft: true
---

‼‼
shaking text
‼‼

That sounds complicated. I would recommend generating the list of checkboxes from the result of the API instead. Something like
~~~dataviewjs
const results = await requestUrl(...);
results.forEach(achievement => {
  if (/* mastered or beaten */) {
    dv.paragraph(`- [x] ${/* achievement details */}`);
  } else {
    dv.paragraph(`- [ ] ${/* achievement details */}`);
  }
});
~~~

## Game

~~~dataviewjs
const api_key = 'PVDnPdtXTW6QsC4gKI0OnYDiQJS0NjRb';
let game_id = 0;
const game_id_list = [
1, // Sonic the Hedgehog - Genesis
2, // Aladdin - Genesis
3, // Streets of Rage 2 - Genesis
30, // Jet Force Gemini - N64
2543, // Konami Krazy Racers - GBA
15626, // Gran Turismo - PSP
28548 // Loopover - NDS
];
let constructed_games = '';

const get_game_data = new function(
'game_id', 'api_key', 'game_id_list', 'return RequestUrl("https://retroachievements.org/API/API_GetGameInfoAndUserProgress.php?z=player1041&y=" + api_key + "&g=" + game_id_list[game] + "&u=player1041&a=1");


dv.paragraph(game_request.json);
dv.span(game_request.json.HighestAwardKind);
for(game_id of game_id_list)
	game_request = get_game_data(game
	if(game_request.json.HighestAwardKind == "mastered")
		dv.span("Finished. " + game_id);
	if(game_request.json.HighestAwardKind == "beaten-hardcore")
		dv.span("Beaten. " + game_id);
	else
		dv.span("Incomplete. " + game_id);
	game++;
	
~~~
