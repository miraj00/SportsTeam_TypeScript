"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Team_exports = {};
__export(Team_exports, {
  Team: () => Team
});
module.exports = __toCommonJS(Team_exports);
class Team {
  players;
  teamName;
  constructor(teamName) {
    this.teamName = teamName;
    this.players = [];
  }
  addPlayer(newPlayer) {
    this.players.push(newPlayer);
  }
  removePlayer(index) {
    this.players.splice(index, 1);
    console.log(this.players.splice(index, 1));
  }
  setActive(index) {
    this.players[index].active = true;
  }
  getPlayerCount() {
    let numOfPlayers = this.players.length;
    return numOfPlayers;
  }
  logActivePlayers() {
    let nameList = this.players.filter((players) => players.active == true);
    console.log(nameList);
  }
  getActivePlayers() {
    let nameList = this.players.filter((players) => players.active == true);
    return nameList;
  }
  removePlayerByName(name) {
    let index = this.players.findIndex(
      (players) => players.name == name
    );
    this.players.splice(index, 1);
  }
  sortByName() {
    const sortBy = (fn) => {
      const cmp = (a, b) => -(a < b) || +(a > b);
      return (a, b) => cmp(fn(a), fn(b));
    };
    const getName = (o) => o.name;
    const sortByName = sortBy(getName);
    this.players.sort(sortByName);
    console.log(this.players.map(getName));
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Team
});
//# sourceMappingURL=Team.js.map
