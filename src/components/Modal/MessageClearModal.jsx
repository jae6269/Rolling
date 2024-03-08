import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './messageClearModal.module.scss';

function MessageClearModal({ url, name, handleClose }) {
  const navigate = useNavigate();
  const handleMessageClear = e => {
    e.preventDefault();
    handleClose(e);
    fetch(url, {
      method: 'DELETE',
    });
    navigate('/list');
  };
  return (
    <div className={styles.clearModalBackground}>
      <div className={styles.clearModal}>
        <p className={styles.modalText}>
          To. {name}
          <br /> 롤링페이퍼를
          <br />
          삭제할까요??
        </p>
        <div className={styles.modalButtons}>
          <button
            className={styles.modalButton}
            type="button"
            onClick={handleMessageClear}
          >
            삭제
          </button>

          <button
            className={styles.modalButton}
            type="button"
            onClick={handleClose}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
export default MessageClearModal;
