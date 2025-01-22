import React, { Component } from "react";
import  AppRouter  from './routes'





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>

      
       <AppRouter/>     
       
      </div>
      
    );
  }
}

export default App;
