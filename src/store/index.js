import {combineReducers, createStore} from 'redux'
import {AddSub} from './reducers'

const Reducers = combineReducers({
  AddSub
})

const store = createStore(Reducers)
export default store
