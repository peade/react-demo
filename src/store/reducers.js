// import {ADD, SUBTRACT} from './actions'

const initState = {
  number: 0
}

export function AddSub(state, action) {
  if (typeof state === 'undefined') {
    state = initState
  }
  let num = 0
  switch (action.type) {
    case 'ADD':
      console.log('add', action)
      num = state.number + action.payload
      return Object.assign({}, state, {number: num})
    case 'SUBTRACT':
      num = state.number - action.payload
      return Object.assign({}, state, {number: num})
    default:
      return state
  }
}
