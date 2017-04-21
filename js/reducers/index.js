import * as actions from '../actions/index';

const makeRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

const initialState = {
    number: makeRandomNumber(),
    guessList: [],
    feedbackMessage: "Make your Guess!",
    fewestGuesses: null,
    won: false
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case actions.GUESS_NUMBER:
            let distance = Math.abs(state.number - action.number);
            let feedbackMessage;
            let won = state.won;
            switch(true){
                case distance > 50:
                    feedbackMessage = "Cold!";
                    break;
                case distance > 30:
                    feedbackMessage = "Getting Warmer";
                    break;
                case distance > 10:
                    feedbackMessage = "Hot!";
                    break;
                case distance > 0:
                    feedbackMessage = "VERY Hot!";
                    break;
                case distance === 0:
                    feedbackMessage = `You got it in ${state.guessList.length} guesses! Click New Game to Try Again`;
                    won = true;
                    break;
                       }

            let guessList = state.guessList.concat(action.number);

            return { ...state,
                    guessList,
                    feedbackMessage,
                    won
                   }

        case actions.NEW_GAME:
            return { ...initialState,
                    number: makeRandomNumber()
                   }

        case actions.FETCH_FEWEST_GUESSES_SUCCESS:
            return {...state,
                    fewestGuesses: action.fewestGuesses
                   }

        case actions.FETCH_FEWEST_GUESSES_ERROR:
            return {...state,
                    error: actions.error
                   }

        case actions.SAVE_FEWEST_GUESSES_SUCCESS:
            return {...state,
                    fewestGuesses: action.fewestGuesses
                   }
        case actions.SAVE_FEWEST_GUESSES_ERROR:
            return {...state,
                    error: actions.error
                   }

                       }
    return state;
};
