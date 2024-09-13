# React Hooks Guide (TypeScript)

React Hooks enable state and other React features to be used in functional components. This guide explains the most important hooks and their TypeScript usage.

---

## Table of Contents

1. [useState](#usestate)
2. [useEffect](#useeffect)
3. [useContext](#usecontext)
4. [useReducer](#usereducer)
5. [useRef](#useref)
6. [useMemo](#usememo)
7. [useCallback](#usecallback)
8. [Custom Hooks](#custom-hooks)

---

## useState

The `useState` hook allows you to add state to functional components.

### Syntax:

```typescript
const [state, setState] = useState<Type>(initialState);
```
## Example:
```typescript
import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Counter;
```
## Explanation:
The useState hook returns an array with the current state and a function to update the state. 

In TypeScript, you can specify the state type (number, string, object, etc.) inside useState<Type>().

---

## useEffect

The useEffect hook allows you to perform side effects such as data fetching, subscriptions, or manually changing the DOM in functional components.

Syntax:
```typescript
Copy code
useEffect(() => {
  // side effect logic here
  return () => {
    // cleanup logic here (optional)
  };
}, [dependency]);
```
## Example:
```typescript
Copy code
import React, { useEffect, useState } from 'react';

const DataFetcher: React.FC = () => {
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []); // Empty dependency array to run only on component mount

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default DataFetcher;
```
## Explanation:
The first argument is the function containing side effects.

The second argument is an array of dependencies; the effect will run whenever one of the dependencies changes.

Use an empty array [] to ensure the effect runs only once after the initial render.

---

## useContext
The useContext hook allows you to access the value from a React context without needing to use a consumer component.

Syntax:
```typescript
Copy code
const value = useContext(MyContext);
```
## Example:
```typescript
Copy code
import React, { useContext } from 'react';

const MyContext = React.createContext<string>('default');

const DisplayContextValue: React.FC = () => {
  const value = useContext<string>(MyContext);

  return <div>Context Value: {value}</div>;
};

export default DisplayContextValue;
```
## Explanation:
useContext takes a context object and returns the current context value.

Ensure the type of the context is properly declared (e.g., string, number, etc.).

---

## useReducer
The useReducer hook is an alternative to useState for managing more complex state logic.

Syntax:
```typescript
Copy code
const [state, dispatch] = useReducer(reducer, initialState);
```
## Example:
```typescript
Copy code
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
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};

export default CounterWithReducer;
```
## Explanation:
useReducer accepts a reducer function and an initial state.
Dispatch actions to update the state.

## useRef

The useRef hook allows you to persist values between renders without causing re-renders. It’s commonly used for accessing DOM elements.

Syntax:
```typescript
Copy code
const ref = useRef<Type>(initialValue);
```
## Example:
```typescript
Copy code
import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
```
## Explanation:
useRef does not cause a re-render when the value changes.
In TypeScript, specify the type for the element reference (HTMLInputElement, etc.).

---

## useMemo

The useMemo hook memoizes the result of a function to optimize performance by avoiding expensive calculations on every render.

Syntax:
```typescript
Copy code
const memoizedValue = useMemo(() => computeValue(), [dependency]);
```

## Example:
```typescript
Copy code
import React, { useMemo, useState } from 'react';

const ExpensiveCalculation: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const expensiveComputation = (num: number): number => {
    console.log('Computing...');
    return num * 2;
  };

  const memoizedResult = useMemo(() => expensiveComputation(count), [count]);

  return (
    <div>
      <p>Result: {memoizedResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExpensiveCalculation;
```
## Explanation:
The function inside useMemo is only recomputed if its dependencies change, optimizing performance for expensive calculations.

---

## useCallback
The useCallback hook memoizes a function, preventing it from being re-created on every render unless its dependencies change.

Syntax:
```typescript
Copy code
const memoizedCallback = useCallback(() => { /* callback */ }, [dependency]);
```

## Example:
```typescript
Copy code
import React, { useCallback, useState } from 'react';

const ButtonComponent: React.FC<{ onClick: () => void }> = React.memo(({ onClick }) => {
  console.log('Button re-rendered');
  return <button onClick={onClick}>Click me</button>;
});

const UseCallbackExample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ButtonComponent onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseCallbackExample;
```

## Explanation:
useCallback ensures that the function remains the same between renders unless its dependencies change, which is useful when passing callbacks to child components.

---

## Custom Hooks
Custom hooks are functions that use React hooks inside them to encapsulate and reuse logic across components.

Syntax:
```typescript
Copy code
const useCustomHook = () => {
  // Custom logic using other hooks
};
```
## Example:
```typescript
Copy code
import React, { useState, useEffect } from 'react';

const useWindowWidth = (): number => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

const WindowWidthComponent: React.FC = () => {
  const width = useWindowWidth();

  return <div>Window Width: {width}px</div>;
};

export default WindowWidthComponent;
```
## Explanation:
Custom hooks enable the reuse of logic by extracting functionality into separate functions, keeping components clean and focused.
