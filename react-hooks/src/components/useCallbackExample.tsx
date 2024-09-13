import React, { useState, useCallback, useMemo } from 'react';

// Expensive calculation function (for demonstration purposes)
const performExpensiveCalculation = (number: number): number => {
  console.log('Performing expensive calculation...');
  // Simulate an expensive calculation
  let result = 0;
  for (let i = 0; i < 1e7; i++) {
    result += Math.sqrt(i) * number;
  }
  return result;
};

const UseCallbackExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  // Memoized callback function to update the count
  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  // Memoized callback function to update the input value
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(event.target.value));
  }, []);

  // Memoized result of an expensive calculation
  const calculationResult = useMemo(() => performExpensiveCalculation(input), [input]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">UseCallback Example</h1>
      <div className="mb-4">
        <label className="block mb-2">Input:</label>
        <input
          type="number"
          value={input}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <button
          onClick={incrementCount}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Increment Count
        </button>
        <p className="mt-2">Count: {count}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Calculation Result:</h2>
        <p>{calculationResult.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default UseCallbackExample;
