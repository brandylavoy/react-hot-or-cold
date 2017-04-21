import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import GameContainer from './components/game-container';

document.addEventListener('DOMContentLoaded', () =>
                          ReactDOM.render(
    <Provider store={store}>
    <GameContainer />
    </Provider>,
    document.getElementById('app')
                         )
);

