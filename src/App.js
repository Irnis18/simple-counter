import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
        }

        increment(){
          this.setState({
            count: this.state.count + 1
          })
        }

         decrement(){
           this.setState({
             count: this.state.count - 1
           })
         }

         reset(){
           this.setState({
             count: 0
           })
         }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple counter</h1>
        </header>
        <div style={{marginTop: '6vh'}}>
          <button className=" btn btn-primary" style={{marginRight: '1vw'}} onClick={this.increment}>Increment!</button>
          <button className='btn btn-primary' style={{marginRight: '1vw'}} onClick={this.decrement}>Decrement!</button>
          <button className='btn btn-danger' onClick={this.reset}>Reset</button>
          <h1 style={{marginTop: '2vh'}}>Current Count: {this.state.count}</h1>
        </div>
      </div>
    );
  }
}

export default App;
