import React, { Component } from 'react';
import './App.css';

class App extends Component{

  state = {
    equation: '',
  }

  state = {
    showing: true
  };

  equation1 = (value) => {
    const equation = this.state.equation;

    this.setState({
      equation: equation + value
    })
  }

  equationAbs = () => {
    const equation = this.state.equation;

    this.setState({
      equation: Math.abs(equation)
    })
  }

  equationSin = () => {
    const equation = this.state.equation;

    this.setState({
      equation: Math.sin(equation)
    })
  }

  equationCos = () => {
    const equation = this.state.equation;

    this.setState({
      equation: Math.cos(equation)
    })
  }

  equationTan = () => {
    const equation = this.state.equation;

    this.setState({
      equation: Math.tan(equation)
    })
  }

  equationLog2 = () => {
    const equation = this.state.equation;

    this.setState({
      equation: Math.log2(equation)
    })
  }

  equationLog10 = () => {
    const equation = this.state.equation;

    this.setState({
      equation: Math.log10(equation)
    })
  }

  equationSqrt = () => {
    const equation = this.state.equation;

    this.setState({
      equation: Math.sqrt(equation)
    })
  }

  equationPower3 = () => {
    const equation = this.state.equation;

    this.setState({
      equation: equation ** 3
    })
  }

  equationPower2 = () => {
    const equation = this.state.equation;

    this.setState({
      equation: equation**2
    })
  }

  clear = () => {
    this.setState({
      equation: ''
    })
  }

  answer = () =>{
    const equation = this.state.equation;
    try{
      this.setState({
        equation: eval(equation), //calculate equation
      })
    }
    catch (error){
      this.setState({
        equation: "ผิดพลาด"
      })
    }
  }

  

  render(){
    const { showing } = this.state;
    return (
    <div className="page">
      
      <div className = "main">

        <div className = "calculator">
          <input className="input" value = {this.state.equation} id = "num-input"/>
          <div id = "buttonContainer">
            <div className = "buttonRow">
              <button onClick={() => this.clear()} className="reset">C</button>
                <button onClick={() => this.equation1("/")} className="operation">/</button>
            </div>
            <div className = "buttonRow">
              <button onClick={() => this.equation1("7")} className="num">7</button>
              <button onClick={() => this.equation1("8")} className="num">8</button>
              <button onClick={() => this.equation1("9")} className="num">9</button>
              <button onClick={() => this.equation1("*")} className="operation">*</button>
            </div>
            <div className = "buttonRow">
              <button onClick={() => this.equation1("4")} className="num">4</button>
              <button onClick={() => this.equation1("5")} className="num">5</button>
              <button onClick={() => this.equation1("6")} className="num">6</button>
              <button onClick={() => this.equation1("-")} className="operation">-</button>
            </div>
            <div className = "buttonRow">
              <button onClick={() => this.equation1("1")}className="num">1</button>
              <button onClick={() => this.equation1("2")}className="num">2</button>
              <button onClick={() => this.equation1("3")}className="num">3</button>
              <button onClick={() => this.equation1("+")}className="operation">+</button>
            </div>
            <div className = "buttonRow">
              <button onClick={() => this.equation1("0")}className="zero">0</button>
              <button onClick={() => this.equation1(".")}className="num">.</button>
              <button onClick={() => this.answer()}className="operation">=</button>
            </div>
            <div className = "buttonRow">
              <button onClick={() => this.setState({ showing: !showing })} className = "clickmore">SHOW / HIDE FUNCTION</button>
            </div>
          </div>
        </div>

        
        <div style={{ display: (showing ? 'block' : 'none') }} className = "calculator">
          <div id="buttonContainer">
            <div className="spacerow"></div>
            <div className="buttonRow2">
                <button onClick={() => this.equationSqrt()} className="moreEqution">√</button>
                <button onClick={() => this.equationPower2()} className="moreEqution">x²</button>
                <button onClick={() => this.equationPower3()} className="moreEqution">x³</button>
            </div>
            <div className="spacerow"></div>
            <div className="buttonRow2">
                <button onClick={() => this.equationLog2()} className="moreEqution">log2</button>
                <button onClick={() => this.equationLog10()} className="moreEqution">log</button>
                <button onClick={() => this.equationAbs()} className="moreEqution">|x|</button>
            </div>
            <div className="spacerow"></div>
            <div className="buttonRow2">
                <button onClick={() => this.equationSin()} className="moreEqution">sin</button>
                <button onClick={() => this.equationCos()} className="moreEqution">cos</button>
                <button onClick={() => this.equationTan()} className="moreEqution">tan</button>
            </div>
          </div>

        </div>
      </div>
    </div>

    );
  }
}

export default App;
