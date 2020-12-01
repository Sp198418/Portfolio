import React, { Component } from 'react';

class Intro extends Component {
   constructor(props){
       super(props);
       this.state = {
         user: '________'
       }
   }

   handleInputChange = (e) => {
       console.log(e.target);
       let value = e.target.value;
       this.setState({futureName: value});
   }

   updateUser = () => {

       this.setState({user: this.state.futureName})
   }

   render() {
       return(
        <header className="App-header">
        <p>Welcome, I am a FullStack Developer,</p>
       <p>My name is {this.state.user}!</p>
       <input id='name' onChange={this.handleInputChange}/> 
       <button id= 'changeName' onClick={this.updateUser}>Change Name</button>
      </header>
       )
   }
}

export default Intro;