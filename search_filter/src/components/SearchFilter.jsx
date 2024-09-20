import React, { useState } from 'react';

const SearchFilter = () => {
  //Declare state for search input and the list of items
  const [searchTerm, setSearchTerm] = useState('');
  const [items] = useState([
    
    'Banana',
    'Apple',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Watermelon',
  ]);

  //Update searchTerm state when input changes
  const handleSearch = (event) => {
    setSearchTerm(event.target.value); // Update the search term with the input value
  };

  //Filter the items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Search Filter for Fruits</h2>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search for a fruit..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: '10px',
          width: '300px',
          marginBottom: '20px',
          fontSize: '16px',
        }}
      />
      {/* Display the filtered list */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index} style={{ fontSize: '18px', margin: '5px 0' }}>
              {item}
            </li>
          ))
        ) : (
          <li style={{ color: 'red', fontSize: '18px' }}>No items found!</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
