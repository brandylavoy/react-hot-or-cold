import * as actions from '../js/actions/index';
import store from '../js/store';

store.dispatch(actions.guessNumber(4));
console.log(store.getState());
