import rootReducer from '../reducers'
import {createStore,applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';


const createStoreWithMiddleWare=applyMiddleware(ReduxPromise)(createStore);
export default store = createStoreWithMiddleWare(rootReducer);
