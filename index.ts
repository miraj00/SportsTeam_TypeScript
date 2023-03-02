import { Player } from "./Player";
import { Team } from "./Team";

let z = { name: "Zack Morris", jersey: 42};
let p = { name: "Cal Ripken", jersey: 12 };
let q = { name: "Jack Sparrow", jersey: 55 };
let r = { name: "Tim Martin", jersey: 42};
      

console.log(p);

let t: Team = new Team("The pidgeons");
// add player
t.addPlayer(z);
t.addPlayer(p);
t.addPlayer(q);
t.addPlayer(r);

console.log(t);

// // remove player
// t.removePlayer(0);
// console.log(t);

t.setActive(0);
t.setActive(2);
console.log(t);

console.log(t.getPlayerCount());

t.logActivePlayers ();

t.getActivePlayers();

console.log(t);
t.removePlayerByName("Tim Martin");
console.log(t);

t.sortByName();