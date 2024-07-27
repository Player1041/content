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
let game = 0;
let game_request = await requestUrl("https://retroachievements.org/API/API_GetGameInfoAndUserProgress.php?z=player1041&y=" + api_key + "&g=" + 2543 + "&u=player1041&a=1");
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

dv.paragraph(game_request.json);
dv.span(game_request.json.HighestAwardKind);
for(game of game_id_list)
	if(game_request.json.HighestAwardKind == "mastered")
		dv.span("Finished. " + game);
	if(game_request.json.HighestAwardKind == "beaten-hardcore")
		dv.span("Beaten. " + game);
	else
		dv.span("Incomplete. " + game);
	game++;
	
~~~
