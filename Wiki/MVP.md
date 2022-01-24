# MVP

For the MVP we want to prove that
 - All data can be shown on the front end (either as a web page or console.log) 
 - There will be three arrays - one with all data, one with all static pole moves and one with all spinny pole moves
  - This is to prove that we can seperate and show data based on certain conditions - the latter two arrays will be taken from the initial full db read

## DB Schema

We need to ensure we can capture the initial data needed. 

- name
- poleSetting - static, spinny
- difficultyLevel - beginner, intermediate, advanced
- (This is likely a future addition) moveType - spin, climb, transition, invert, upright, floor, head/forearm/handstand
