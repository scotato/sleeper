function reducer(state, action) {
  switch (action.type) {
    case 'setTime':
      return {
        ...state,
        time: new Date().getTime()
      }
    case 'toggleSettings':
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen
      }
    default:
      throw new Error()
  }
}

const initialState = {
  time: new Date().getTime(),
  isSettingsOpen: false,
}

export { reducer, initialState }
