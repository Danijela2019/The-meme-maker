import React, {  Component } from 'react';
import './App.css';
import Generator from './Generator/Generator';

class App extends Component {
  state = {
    sizeFont: 50,
    userInput: "",
    randomImg: "http://i.imgflip.com/4ct0u3.jpg",
    totalMemes: [],
  };

  componentDidMount = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then(data => data.json())
      .then(response => {
        const memes = response.data.memes;
        this.setState({ totalMemes: memes });
      });
  }

  handleChange = event => {
  const { name, value } = event.target;
  this.setState({[name]: value });
  };

  handleClick = () => {
    let randomNumber = Math.floor( Math.random() * this.state.totalMemes.length);
    this.setState({ randomImg: this.state.totalMemes[randomNumber].url });
  }

  render() {
    const style = {
      fontSize: Number(this.state.sizeFont),
      fontFamily:`'Acme', sans-serif`,
      color:'rgb(237 252 22)',
      textShadow:' 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000, 2px 2px 5px #000',
     textTransform: 'uppercase',
     transform: 'translateX(-50%)',
     position:'absolute',
     maxWidth: '36em',
     textAlign: 'center',
     left: '49%'
    }
      return ( 
        <div className="App">
        <Generator
          changed={this.handleChange}
          value={this.state.text}
          currentText={this.state.userInput}
          value={this.state.sizeFont}
          currentFont={this.state.sizeFont}
          clicked={this.handleClick}
        /> 
        <div>
          <h2 style={style}>{this.state.userInput}</h2>
          <img className="image" src={this.state.randomImg} alt="" />
       </div> 
       </div>
      );
    }
  }
  
export default App;

