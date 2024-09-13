import React, { useRef } from 'react';

const FocusInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="p-4 m-4 border rounded shadow-md bg-white">
      <input
        ref={inputRef}
        type="text"
        className="p-2 border rounded"
      />
      <button
        className="ml-2 p-2 bg-blue-500 text-white rounded"
        onClick={focusInput}
      >
        Focus Input
      </button>
    </div>
  );
};

export default FocusInput;
