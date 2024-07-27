---
title: Test Site for various Doohickeys and Trinkets
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
let id = 0;
let game = 0;
let game_data = null;
const game_id_list = [
1, // Sonic the Hedgehog - Genesis
2, // Aladdin - Genesis
3, // Streets of Rage 2 - Genesis
30, // Jet Force Gemini - N64
28548 // Loopover - NDS
];
let constructed_games = '';
const game_data = await requestUrl('https://retroachievements.org/API/API_GetUserCompletionProgress.php?u=Player1041&z=player1041&y=' + api_key + '&c=150');
let count = game_data.json.Total;
for(id in game_id_list)
	for(game in game_data.json.Results)
		if(game_data.json.Results.0.GameID == id)
			constructed_games = constructed_games.concat(" ", 
~~~
