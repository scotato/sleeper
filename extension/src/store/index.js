function reducer(state, action) {
  switch (action.type) {
    case 'setTime':
      return {
        ...state,
        time: new Date().getTime()
      }
    default:
      throw new Error()
  }
}

const initialState = {
  time: new Date().getTime()
}

export { reducer, initialState }
