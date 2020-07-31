import React, { Component } from 'react';
import './css/App.scss';
import './css/GameIntroScreen.scss';
class DataStructureInfo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let content;

        if(this.props.structure==="Interests"){
          content = <div class = "description">
          <p>Nothing more to see here yet!
          </p>
          </div>
        }else if(this.props.structure==="Activities/Leadership"){
          content = <div class = "description">
          <p>Nothing more to see here yet!
          </p>
          </div>
        }else if(this.props.structure==="Project Links"){
          content = <div class = "description">
          <p><a href = "http://www.course-cache.com/" target="_blank" >CourseCache</a>
          <div></div>
          <a href = "http://www.dataverse.fun/" target="_blank" >Dataverse</a>
          <div></div>
          <a href = "http://www.robinfolio.com/" target="_blank" >Robinfolio</a>
          </p>
          </div>
        }else if(this.props.structure==="Education"){
            content = <div class = "description">
            <p><a href = "https://stackoverflow.com/" target="_blank" >Important link to learn more about my education</a>
            </p>
            </div>
        }else if(this.props.structure==="Daniel Park"){
            content = <div class = "description">
            <p><a href = "/" target="_blank" >Not sure why you'd click this button but here is a link to my personal site</a>
            </p>
            </div>
        }


        return(
        <div className={"infoDiv"}>
            <h1> {this.props.structure} </h1>
            <button className={"x-button"} onClick={this.props.onClose}>X</button>
            {content}
            <button className={"large-button"} id="play-btn" onClick={this.props.onClose}> Back </button>
        </div>);
    }

}



export default DataStructureInfo
