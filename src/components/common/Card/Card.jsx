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

  // convertedContent안의 p태그에 접근해 스타일 넣기
  // eslint-disable-next-line no-shadow
  const getOptions = (font, styles) => ({
    // eslint-disable-next-line react/no-unstable-nested-components, consistent-return
    replace: domNode => {
      if (domNode.type === 'tag' && domNode.name === 'p') {
        return (
          <p className={styles.text} style={{ fontFamily: font }}>
            {domNode.children.map((child, index) =>
              child.type === 'text'
                ? child.data
                : React.createElement(
                    child.name,
                    // eslint-disable-next-line react/no-array-index-key
                    { key: index },
                    child.children.map(c => c.data),
                  ),
            )}
          </p>
        );
      }
    },
  });

  const convertedContent = parse(content, getOptions(font, styles));

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
        <div>
          <p className={styles.text} style={{ fontFamily: font }}>
            {convertedContent}
          </p>
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
