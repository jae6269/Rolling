import React from 'react';
import styles from './messageClearModal.module.scss';

function MessageClearModal({ recipient, handleClose }) {
  const { id, name } = recipient;
  return (
    <div className={styles.clearModalBackground}>
      <div className={styles.clearModal}>
        <p className={styles.modalText}>
          {name} 님에게 작성된
          <br /> 롤링페이퍼를
          <br />
          모두 삭제할까요??
        </p>
        <div className={styles.modalButtons}>
          <button className={styles.modalButton} type="button">
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
