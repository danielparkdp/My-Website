import React, { Component } from 'react';
import '../css/App.scss';
import '../css/Game.scss';
import '../css/GameIntroScreen.scss';
import '../css/GameOverScreen.scss';
import '../css/Tutorial.scss';
import Planet from '../Planet';
import DataStructureInfo from "../DataStructureInfo";

/**
 * Intro screen for a game. Expects the following props:
 *    @prop title : name of game (string)
 *    @props dataStructure : name of dataStructure that is being taught (string)
 *    @props leftOffset : left offset for planet
 *    @props topOffset : top offset for planet
 *    @props width: width of planet
 *    @props planetUrl: url to planet img
 *    @props replay: () => {} function called when user presses replay button
 *    @props back: () => {} function called when user presses back to space button
 *    @props backToArena: () => {} function called when user presses back to arena button
 *    @props multiplayer: bool -> true if the game had > 1 player
 *    @props players: map of all the players' usernames to their score
 */
class GameOverScreen extends Component {

  constructor(props) {
    super(props);

    this.props = {
        score: 0,
        scoreUnits: "targets collected",
        replay: undefined, //function to replay game
        back: undefined, //function for back to space
    };
    this.state = {
        title: "",
        planetUrl: "",
        dataStructure: "",
        topOffset: 0, //for planet img positioning
        infoToggled:false
    };

    this.myRank = undefined;
    this.playerRankMap = {};
}

toggleInfo=()=>{
    this.setState((prevState) => ({
      infoToggled:!prevState.infoToggled
    }));
}

  render() {

    //sort all the given players if multiplayer
    let sortedPlayers = this.props.multiplayer ?
             Object.keys(this.props.players).sort((user, user2) =>
                  (this.props.players[user]["score"] > this.props.players[user2]["score"]) ? -1 : 1)
                   : undefined;

   if(this.state.infoToggled){
     return <DataStructureInfo onClose = {this.toggleInfo} structure = {this.props.dataStructure}/>
   } else{
      return (
        <div className="intro-screen exit-screen"  onKeyDown={this.onKeyDown}>

              <h1 className="game-title" >{this.props.title} </h1>
              <h2 className="data-struct" onClick={this.toggleInfo}> {this.props.dataStructure}</h2>
              <Planet top={30 + this.props.topOffset} left={-70 + this.props.leftOffset} width={this.props.width} imgUrl={this.props.planetUrl} name={""}/>
              <h3 className="instructions">{this.props.instructions} </h3>

              {/* GAME SPECIFIC INSTRUCTIONS */}
              <div className="instructionsDiv">{this.props.inputGraphics}</div>

           <button className={"large-button"} id="return-btn" onClick={this.props.back}> Back to flying </button>
        </div>
      );
    }
  }
}

export default GameOverScreen;
