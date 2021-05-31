function counter(state = {counter : 0 }, action) {
    switch (action.type) {
      case 'INCREMENT':
        return {counter : state.counter + 1}
      case 'DECREMENT':
        return {counter : state.counter - 1}
      case 'INCREMENT_CUSTOM':
        return {counter : state.counter + action.payload}
      case 'DECREMENT_CUSTOM':
        return {counter : state.counter - action.payload}
      default:
        return state
    }
}

export default counter;