import React, { useReducer } from 'react';

interface State {
  count: number;
}

type Action = { type: 'increment' } | { type: 'decrement' };

const initialState: State = { count: 0 };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterWithReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-4 m-4 border rounded shadow-md bg-white">
      <p className="text-lg">Count: {state.count}</p>
      <button
        className="mr-2 p-2 bg-green-500 text-white rounded"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +
      </button>
      <button
        className="p-2 bg-red-500 text-white rounded"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </button>
    </div>
  );
};

export default CounterWithReducer;
