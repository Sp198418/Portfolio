import React, { Component } from 'react';
import './About.css';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){

        return(
            <div className= 'About' name= 'About'>
             <h1> I'm Samuel, a Software enginner based in New York. I specialize in creating the best user interface experience.
                 I have strong critical thinking abilities and problem solving skills also able to learn new concepts quickly.
                 </h1>
                    <h2>Here are a few technologies I've been working with recently:
                     <ul>
                         <li>JavaScript</li>
                        <li>Java</li>
                        <li>HTML & CSS</li>
                        <li> React.JS</li>
                        <li>Node.js</li>
                        <li>API</li>
                    </ul> 
                </h2>
             
            </div>
        
        )
    }
}



export default About;