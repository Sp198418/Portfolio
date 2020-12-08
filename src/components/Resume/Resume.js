import React, { Component } from 'react';
import './Resume.css';
import resume from './resumeimg.png'

class Resume extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){

        return(
            <div className= 'Resume' name= 'Resume'>
             <img src={resume}/>
             

             
            </div>
        
        )
    }
}



export default Resume;