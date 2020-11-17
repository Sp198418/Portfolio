import React, { Component } from 'react';

class Intro extends Component {
   constructor(props){
       super(props);
       this.state = {
         user: '________'
       }
   }

   handleInputChange = (e) => {
       let value = e.target.value;
       this.setState({
           user: value
       })
   }

   render() {
       return(
        <header className="App-header">
        <p>Welcome, I am a FullStack Developer,</p>
       <p>My name is {this.state.user}!</p>
       <input onChange={this.handleInputChange}/>
      </header>
       )
   }
}

export default Intro;