import { createStore } from 'redux';
import counter from './reducers/index'


let store = createStore(counter)

export default store;