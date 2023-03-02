import { Player } from "./Player";

export class Team {
  players: Player[];
  teamName: string;


  constructor(teamName: string) {

    this.teamName = teamName;
    this.players = [];
  }

  // add player
  addPlayer(newPlayer: Player): void {
    this.players.push(newPlayer);
  }

  // remove player
  removePlayer(index: number): void {
    this.players.splice(index, 1);
    console.log(this.players.splice(index, 1));
  }

  // setActive
  setActive(index: number): void {

    this.players[index].active = true;
  }

  // getPlayerCount
  getPlayerCount(): number {
    let numOfPlayers = this.players.length;
    return numOfPlayers;
  }

  // logActivePlayers
  logActivePlayers(): void {
    let nameList = this.players.filter(players => players.active == true);
    console.log(nameList);
  }

  // getActivePlayers
  getActivePlayers() {

    let nameList = this.players.filter(players => players.active == true);
    return nameList;
  }


  // removePlayerByName
  removePlayerByName(name: string) {
    let index: number = this.players.findIndex(
      players => players.name == name);
    this.players.splice(index, 1);
  }


  //sortByName 
  sortByName() {

    const sortBy = fn => {
        const cmp = (a, b) => -(a < b) || +(a > b);
        return (a, b) => cmp(fn(a), fn(b));
    };

    const getName = o => o.name;
    const sortByName = sortBy(getName);
  
    this.players.sort(sortByName);
    console.log(this.players.map(getName));
  };

  //toString 
  


}