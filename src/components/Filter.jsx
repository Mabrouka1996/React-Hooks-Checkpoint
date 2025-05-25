
import React from 'react';

const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setTitleFilter(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={(e) => setRateFilter(Number(e.target.value))}
        min="0"
        max="10"
      />
    </div>
  );
};

export default Filter;
