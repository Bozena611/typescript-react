import { useReducer } from 'react'

type CounterState = {
  count: number
}
/*lines 9-25 are called "Discriminated Unions" in Typescript
and is the recommended approach for typing reducer functions*/

type UpdateAction = {
  type: 'increment' | 'decrement'
  payload: number
}

type ResetAction = {
  type: 'reset'
}
/*
type CounterAction = {
  type: 'increment' | 'decrement' | 'reset'
  payload?: number /*type reset doesn't need payload but Typescript shows error for button onclick for reset and is asking for payload
}                    we can add ? here but then Typescript complains in line 17 and 18 about payload being possibly undefined
*/

/* so we add separate update and reset action and change CounterAction to: */
type CounterAction = UpdateAction | ResetAction

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch ({type: 'reset' })}>Reset</button>
    </>
  )
}