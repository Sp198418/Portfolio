import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }


    render(){

        return(
            <div className= 'Contact'>
             <h1>You can reach me by Email: samuelpierrelouis10@gmail.com
                 <br/>
                 LinkedIn: linkedin.com/in/samuelpl
             </h1>
             
            </div>
        
        )
    }
}



export default Contact;