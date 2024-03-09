import React, { useState } from 'react';
import Modal from './SearchModal';
import ListOfCard from '../CardList/ListOfCard';
import styles from './index.module.scss';
import { searchBtn } from '../../utils/imageImport';

const Search = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSearchInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleToggleModal = () => {
    setSearchTerm('');
    setShowModal(!showModal);
  };

  return (
    <div className={styles.searchContainer}>
      <button type="button" onClick={handleToggleModal}>
        <img src={searchBtn} alt="search button" />
      </button>
      <Modal isOpen={showModal} onClose={handleToggleModal}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="롤링 페이퍼를 검색해 보세요"
            value={searchTerm}
            onChange={handleSearchInputChange}
            className={styles.inputBox}
          />
          <img
            className={styles.searchIcon}
            src={searchBtn}
            alt="search button"
          />
          <div className={styles.cardList}>
            {searchTerm &&
              filteredData.map(item => (
                <ListOfCard key={item.id} recipient={item} />
              ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Search;
