import React, { Component } from 'react';
import './css/Tutorial.scss';
import red_rocket_img from './img/keys.png'
import planet_img from './img/planets/apple_planet.png'
import arena_img from './img/rockets/rocket_red.png'


class Menu extends Component {

    closeOnClick(event) {
        if(event) event.preventDefault();
        this.props.onClose();
    }

    render() {
        return (
            <div className="tut-scroll-div">
            <div className="tutorial" >
                <button className={"close-button"} id={"tut-close"} onPointerDown={(event) => this.closeOnClick(event)}>
                    <i className="fas fa-times"></i> </button>

                <h2 id={"tut-title"}> Welcome to my website - Gamified! </h2>

                <div className="grid-container">
                    {/* HOW TO FLY */}
                    <div className="grid-item" id="tut-rocket-cell"><img className={"tut-pic"} id="tut-WASD-img" src={red_rocket_img}/></div>
                    <div className="grid-item" id="tut-rocket-text"><div className={"tut-text"}>WASD or Arrow Keys to fly your plane!</div></div>

                     {/* HOW TO PLAY GAMES */}
                    <div className="grid-item" id="tut-planet-text"><div className={"tut-text"}>Fly to a location to learn about my projects, involvements, and more :) </div></div>
                    <div className="grid-item" id="tut-planet-cell"><img className={"tut-pic"} id="tut-planet-img" src={planet_img}/></div>

                     {/* ARENA */}
                    <div className="grid-item" id="tut-arena-cell"><img className={"tut-pic"} id="tut-arena-img" src={arena_img}/></div>
                    <div className="grid-item" id="tut-arena-text"><div className={"tut-text"}>Thanks for visiting my site!</div></div>

                </div>

                <button className="large-button" id="begin-btn" onPointerDown={(event) => this.closeOnClick(event)}>Lets-a-go!</button>

                {/*<div> You've just entered a solar system filled with exciting planets! Use arrow keys or WASD to fly your rocket around and explore! </div>*/}


            </div>
            </div>
        );
    }}

export default Menu;
