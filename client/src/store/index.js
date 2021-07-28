import { createStore, applyMiddleware, compose} from 'redux';
import games from '../reducer/games';
import thunk from "redux-thunk";


  export const store = createStore(games, 
    compose(applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))