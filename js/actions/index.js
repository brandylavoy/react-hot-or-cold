import 'isomorphic-fetch';

//Action 1: Guess a number
export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = number => ({
    type: GUESS_NUMBER,
    number
});

//Action 2: Come up with new number
export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME
});

//API request actions
export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = fewestGuesses  => ({
    type: FETCH_FEWEST_GUESSES_SUCCESS,
    fewestGuesses
});

export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = error => ({
    type: FETCH_FEWEST_GUESSES_ERROR,
    error
});

export const SAVE_FEWEST_GUESSES_SUCCESS = 'SAVE_FEWEST_GUESSES_SUCCESS';
export const saveFewestGuessesSuccess = fewestGuesses  => ({
    type: SAVE_FEWEST_GUESSES_SUCCESS,
    fewestGuesses
});

export const SAVE_FEWEST_GUESSES_ERROR = 'SAVE_FEWEST_GUESSES_ERROR';
export const saveFewestGuessesError = error  => ({
    type: SAVE_FEWEST_GUESSES_ERROR,
    error
});

export const fetchFewestGuesses = () => dispatch => {
    const url = '/fewest-guesses';
    return fetch(url).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
        .then(response => response.json())
        .then(data =>
              dispatch(fetchFewestGuessesSuccess(data.fewestGuesses))
             )
        .catch(error =>
               dispatch(fetchFewestGuessesError(error))
              );
};

export const saveFewestGuesses = (userGuesses) => dispatch => {
    console.log(userGuesses)
    const url = `/fewest-guesses/${userGuesses}`;
    return fetch(url, {
        method: 'POST',
        body: {
            userGuesses: userGuesses
        }
    }).then(response => {
        if (!response.ok) {
            const error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
        .then(response => response.json())
        .then(data =>
              dispatch(saveFewestGuessesSuccess(data.fewestGuesses))
             )
        .catch(error =>
               dispatch(saveFewestGuessesError(error))
              );
};
