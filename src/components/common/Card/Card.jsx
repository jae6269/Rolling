import React, { useState } from 'react';
import parse from 'html-react-parser';
import styles from './card.module.scss';
import formatCardCreatedDate from '../../../utils/formatDataFunctions';
import Profile from '../Profile/Profile';
import Modal from '../../Modal/Modal';
import DeleteButton from './DeleteButton';
import { MESSAGE_DELETE_URL } from '../../../constants/fetchUrl';

function Card({ props, isEditMode, cards, setCards }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    id,
    sender,
    profileImageURL,
    relationship,
    content,
    font,
    createdAt,
  } = props;
  const date = formatCardCreatedDate(createdAt);
  const convertedContent = parse(content);

  const handleModalSwitch = e => {
    e.preventDefault();
    setIsModalOpen(!isModalOpen);
  };

  const handleDeleteButtonClick = e => {
    e.stopPropagation();
    const deleteUrl = `${MESSAGE_DELETE_URL}/${id}/`;
    fetch(deleteUrl, {
      method: 'DELETE',
    });

    const newCards = cards.filter(card => card.id !== id);
    setCards(newCards);
  };

  return (
    <>
      <button
        type="button"
        className={styles.container}
        onClick={handleModalSwitch}
      >
        <Profile
          profileImageURL={profileImageURL}
          sender={sender}
          relationship={relationship}
          font={font}
        />
        {isEditMode && (
          <div className={styles.cardDeleteButton}>
            <DeleteButton onClick={handleDeleteButtonClick} />
          </div>
        )}
        <hr className={styles.underline} />
        <div className={styles.text} style={{ fontFamily: font }}>
          {convertedContent}
        </div>
        <p className={styles.date} style={{ fontFamily: font }}>
          {date}
        </p>
      </button>
      {isModalOpen && <Modal props={props} onClick={handleModalSwitch} />}
    </>
  );
}

export default Card;
