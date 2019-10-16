import React, { Component } from 'react';
import './App.css';

import cardInfo from "./cardInfo.json";

import Wrapper from "./components/Wrapper";

import Header from "./components/Header";

import PicCard from "./components/PicCard";

class App extends Component {

  state = {
    cardInfo,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cardInfo.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cardInfo.find((o, i) => {
      if (o.id === id) {
        if(cardInfo[i].count === 0){
          cardInfo[i].count = cardInfo[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cardInfo.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
      <div className="cardContainer">
      {this.state.cardInfo.map(card =>
        <PicCard
          clickCount={this.clickCount}
          id={card.id}
          key={card.id}
          name={card.name}
          image={card.image}
          />
      )}
      </div>
      </Wrapper>
    );
  }
}

export default App;
