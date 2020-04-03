import React, { createContext, useMemo, useReducer } from 'react'
import { reducer, initialState } from '../store'

const Context = createContext([{}, () => {}])

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <Context.Provider value={value}>
      {props.children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
