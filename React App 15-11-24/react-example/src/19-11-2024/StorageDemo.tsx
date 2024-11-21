import React from 'react';

import UseStorage from './useStorage';

const StorageDemo: React.FC = () => {
  // Use the custom hook
  const { add, remove, get } = UseStorage<string>("userName");

  const handleAdd = () => {
    add("Max");
  };

  const handleRemove = () => {
    remove();
  };

  return (
    <div>
      <h1>LocalStorage Example</h1>
      <p>Stored Value: {get() || "No value found"}</p>
      <button onClick={handleAdd}>Add Value</button>
      <button onClick={handleRemove}>Remove Value</button>
    </div>
  );
};

export default StorageDemo;
