import React from 'react';

export default function GameForm (props){
    return (
        <form onSubmit = {props.guessNumber}>
        <input type="text" placeholder="Enter your Guess" onChange={props.guessNumberInput} />
        <button type="submit">
        Guess
        </button>
        </form>
    );
}
