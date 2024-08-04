"use client";
import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

interface CounterProps {
  initialValue?: number;
  onValueChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0, onValueChange }) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (): void => {
    const newValue = count + 1;
    setCount(newValue);
    onValueChange(newValue);
  };

  const decrement = (): void => {
    if (count <= 0) return;
    const newValue = count - 1;
    setCount(newValue);
    onValueChange(newValue);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={decrement}
        className="p-1 text-gray-800 border  bg-white rounded-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        <MinusIcon className="w-3 h-3" />
      </button>
      <span className="text-lg font-normal">{count}</span>
      <button
        onClick={increment}
        className="p-1 text-gray-800 border bg-white rounded-sm hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
      >
        <PlusIcon className="w-3 h-3" />
      </button>
    </div>
  );
};

export default Counter;