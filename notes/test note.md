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

```dataviewjs
const game_id_list = [
1, // Sonic the Hedgehog - Genesis
2, // Aladdin - Genesis
3, // Streets of Rage 2 - Genesis
30, // Jet Force Gemini - N64
28548 // Loopover - NDS
]
let constructed_games = []
for id in game_id_list
	const game_data = await requestUrl('https://retroachievements.org/API/API_GetGameInfoAndUserProgress.php?z=player1041&y=PVDnPdtXTW6QsC4gKI0OnYDiQJS0NjRb&g=14402&u=MaxMilyin');
	if game_data.
```
