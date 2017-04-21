import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import GameForm from './game-form';
import store from '../store';

export class GameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.guessNumberAction = this.guessNumberAction.bind(this);
        this.guessNumberInput = this.guessNumberInput.bind(this);
        this.newGame = this.newGame.bind(this);
        this.state = {
            number: null
        }
    }

    componentDidMount() {
        this.props.dispatch(
            actions.fetchFewestGuesses(this.props.guessNumber)
        );
    }

    guessNumberAction(event){
        event.preventDefault();
        this.props.dispatch(actions.guessNumber(this.state.number))
        console.log(store.getState())
        if(store.getState().won){
            this.props.dispatch(actions.saveFewestGuesses(this.props.guessList.length))
        }
    }

    guessNumberInput(event){
        this.setState(
            {
                number: event.target.value
            }
        );
    }
    newGame(){
        this.props.dispatch(actions.newGame());
    }

    render() {
        return (
            <div className="game-container">
            <button onClick={this.newGame}>New Game</button>
            <h1>Hot or Cold!</h1>
            <h4>{this.props.feedbackMessage}</h4>
            <GameForm guessNumberInput={this.guessNumberInput} guessNumber={this.guessNumberAction}/>
            <p>Guess #{this.props.guessList.length}</p>
            <p>Previous guesses: {this.props.guessList.join(" ")}</p>
</div>
);
}
}

const mapStateToProps = (state, props) => ({
    feedbackMessage: state.feedbackMessage,
    guessList: state.guessList,
    guessNumber: state.guessNumber,
    won: state.won
});

export default connect(mapStateToProps)(GameContainer);
