//Task:                Hangman
//Assigned to:         Admin
//Date assigned:       10th June 2023
//Due date:            10th June 2023
//Task complete?       Yes
//Task description:    Create an game called Hangman

// I have used code sandbox to help with this.
// codesandbox.io/s/hboin?file=/src/Hangman.css

import React, { Component } from "react";
import { generator } from './wordList';
import "./Styles.css";

class Game extends Component {
  
    constructor(project) {
        super(project);
        this.state = { 
            
            wrongAnswer: 0, 
            guess: new Set(), 

            result: generator() 
        };
  
        this.control = this.control.bind(this);
        this.gameRestart = this.gameRestart.bind(this);
    }

    // Below is the function for the game restart button.
    gameRestart() {
        this.setState({
            wrongAnswer: 0,
            guess: new Set(),
            result: generator()
        });
    }

    // Below is the function for the help button.
    help() {
        document.getElementById("help2").innerHTML = "Welcome to hangman, to play this game pick random letters in order to guess a word, if the word you guess is right it will be displayed above, if it is wrong nothing will happen but be careful you dont want to get to many wrong.";
    }
    
    // Below is the function that will create a word with the letters the user will guess.
    create() {
        const { result, guess } = this.state;
  
        return result
        .split("")
        .map(character => (guess.has(character) ? character : "_"));
    }

    // Below is the function that controls what happens wit the guess letter.
    control(param) {
        let character = param.target.value;
  
        this.setState(st => ({
            guess: st.guess.add(character),
            wrongAnswer: st.wrongAnswer + (st.result.includes(character) ? 0 : 1)
        }));
    }

    // Below is the function that creates a keyboard.
    keyboard() {
        const  { control } = this;
        const { guess } = this.state;
        
        return "abcdefghijklmnopqrstuvwxyz".split("").map((character, spacing) => (
        <button
        key={spacing}
        value={character}
        onClick={control}
        challenge={guess.has(character)}
        >
            {character}
            </button>
            ));
        }

        // Below is the function that will display the game.
        render() {
            const { wrongAnswer, result} = this.state;
            const { limit } = this.props;
  
            return (
            <div className='Game'>
                <h1> Welcome to Hangman </h1>
                <p> Number of wrong attempts: {wrongAnswer} </p>
  
          
          { result === this.create().join("") ? <p> You are the Winner! </p> :
          
          (wrongAnswer === limit ?
          <div>
            <p> Uh Oh seems like you have lost! </p>
            <p> This was the correct word: {result}</p>
            </div>
            :
            <div>
                <p className='word'>{this.create()}</p>
                <p className='keyboard'>{this.keyboard()}</p>
                </div>)
                }
                
                <button id='restart' onClick={this.restart}> Restart </button>
                <button id='help' onClick={this.help}> Help </button>
                <p id = "help2"></p>
                </div>
                );
            }
        }
        
        export default Game;