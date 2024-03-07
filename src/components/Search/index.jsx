import React, { useState } from 'react';
import ListOfCard from '../CardList/ListOfCard';
import styles from './index.module.scss';

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleSearchInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className={styles.searchContainer}>
      <button type="button" onClick={() => setShowSearchBox(!showSearchBox)}>
        🔍
      </button>
      {showSearchBox && (
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          {filteredData.map(item => (
            <ListOfCard key={item.id} recipient={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
