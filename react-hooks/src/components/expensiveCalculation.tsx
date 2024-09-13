import React, { useState, useMemo, useCallback } from 'react';

// Expensive calculation function
const performExpensiveCalculation = (input: number): number => {
  console.log('Performing expensive calculation...');
  // Simulate an expensive calculation
  let result = 0;
  for (let i = 0; i < 1e8; i++) {
    result += Math.sqrt(i) * input;
  }
  return result;
};

const ExpensiveCalculation: React.FC = () => {
  const [input, setInput] = useState(1);
  const [trigger, setTrigger] = useState(false);

  // Memoize the result of the expensive calculation
  const result = useMemo(() => performExpensiveCalculation(input), [input, trigger]);

  // Memoize the callback function to update the input
  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(event.target.value));
  }, []);

  // Memoize the callback function to trigger recalculation
  const handleTriggerChange = useCallback(() => {
    setTrigger((prev) => !prev);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Expensive Calculation Example</h1>
      <div className="mb-4">
        <label className="block mb-2">Input:</label>
        <input
          type="number"
          value={input}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
      </div>
      <button
        onClick={handleTriggerChange}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Trigger Calculation
      </button>
      <div>
        <h2 className="text-lg font-semibold">Calculation Result:</h2>
        <p>{result.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ExpensiveCalculation;
