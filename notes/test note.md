---
title: Test Site for various Doohickeys and Trinkets
draft: true
---

‼‼
shaking text
‼‼

That sounds complicated. I would recommend generating the list of checkboxes from the result of the API instead. Something like
~~~/*dataviewjs
const results = await requestUrl(...);
results.forEach(achievement => {
  if (/* mastered or beaten */) {
    dv.paragraph(`- [x] ${/* achievement details */}`);
  } else {
    dv.paragraph(`- [ ] ${/* achievement details */}`);
  }
});*/
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
		//dv.paragraph("Mastered " + game_data.json.ID + " " + game_data.json.Title);
		dv.paragraph(" - [x] **${game_data.json.Title}** - ${game_data.json.}")
	} 
	if(game_data.json.HighestAwardKind == "beaten-hardcore") {
		//dv.paragraph("Beaten Hardcore " + game_data.json.ID + " " + game_data.json.Title);
		}
	else {
		//dv.paragraph("Incomplete " + game_data.json.ID + " " + game_data.json.Title);
		}
}
~~~

