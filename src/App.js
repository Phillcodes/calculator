import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input'
import ClearButton from './components/ClearButton';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }



  addToInput = value => {
    this.setState({ input: this.state.input + value })
    console.log(this.state.input)
  } 

addZeroToInput = val => {
  // hvis this.state.input ikke er tomt, så tilføj 0
  if (this.state.input !== "") {
    this.setState({input: this.state.input + val});
  } 
}

addDecimal = val => {
  // tilføj kun decimal hvis der ikke allerede er decimal i input feltet
  if (this.state.input.indexOf(".") === -1 ) {
    this.setState({input: this.state.input + val})
  }
}

clearInput = () => {
this.setState({input: ""})
}


add = () => {
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "plus";
}

minus = () => {
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "minus";
}

multiply = () => {
  this.state.previousNumber = this.state.input;
  this.setState=({ input: "" });
  this.state.operator = "multiply";
}


evaluate = () => {
this.state.currentNumber = this.state.input;
if (this.state.operator === "plus") {
  this.setState({
    input: 
    parseInt(this.state.previousNumber) + 
    parseInt(this.state.currentNumber)
  })
} else if (this.state.operator === "minus") {
  this.setState({
    input: 
    parseInt(this.state.currentNumber) - 
    parseInt(this.state.previousNumber)
  })
} else if (this.state.operator === "multiply") {
  this.setState({
    input:
    parseInt(this.state.currentNumber) *
    parseInt(this.state.previousNumber)
  })
} else if (this.state.operator === "divide") {
  this.setState({
    input:
    parseInt(this.state.currentNumber) /
    parseInt(this.state.previousNumber)

  })
}
}










  render() {
  return (
    <div className="App">
<div className="calc-wrapper">
<div className="row">

<Input>{this.state.input}</Input> 
</div>
  <div className="row">
 
    <Button handleClick={this.addToInput}>7</Button>
    <Button handleClick={this.addToInput}>8</Button>
    <Button handleClick={this.addToInput}>9</Button>
    <Button handleClick={this.divide}>/</Button>

  </div>
  <div className="row">
    <Button handleClick={this.addToInput}>4</Button>
    <Button handleClick={this.addToInput}>5</Button>
    <Button handleClick={this.addToInput}>6</Button>
    <Button handleClick={this.multiply}>*</Button>
  </div>
  <div className="row">
    <Button handleClick={this.addToInput}>1</Button>
    <Button handleClick={this.addToInput}>2</Button>
    <Button handleClick={this.addToInput}>3</Button>
    <Button handleClick={this.add}>+</Button> 
  </div>
  <div className="row">
    <Button handleClick={this.addDecimal}>.</Button>
    <Button handleClick={this.addZeroToInput}>0</Button>
    <Button handleClick={this.evaluate}>=</Button>
    <Button handleClick={this.minus}>-</Button>
  </div>
  <div className="row">
      <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
    </div>
  </div>
</div>
  );
  }
}

export default App;
