import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="p-4 m-4 border rounded shadow-md bg-white">
      <p className="text-lg">You clicked {count} times</p>
      <button
        className="mt-2 p-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
