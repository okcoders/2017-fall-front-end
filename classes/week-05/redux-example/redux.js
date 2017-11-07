const createStore = require('redux').createStore

const defaultState = {
  slices: 100,
  lastPersonToGrab: null
}

function pizzaParty(state = defaultState, action) {
  switch (action.type) {
    case 'GRAB_SLICES':
      return {
        slices: state.slices - action.payload.number,
        lastPersonToGrab: action.payload.person
      }
    default:
      return state
  }
}

const store = createStore(pizzaParty)

console.log(store.getState())

function grabSlices(number, person) {
  return {
    type: 'GRAB_SLICES',
    payload: {
      number: number,
      person: person
    }
  }
}

const unsub = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(grabSlices(5, 'Zach'))
store.dispatch(grabSlices(5, 'Susan'))
store.dispatch(grabSlices(5, 'Zach'))
store.dispatch(grabSlices(5, 'Bob'))
store.dispatch(grabSlices(5, 'Carson'))

