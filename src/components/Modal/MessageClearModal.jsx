import React from 'react';
import styles from './messageClearModal.module.scss';

function MessageClearModal({ handleClose }) {
  return (
    <div className={styles.clearModalBackground}>
      <div className={styles.clearModal}>
        <p className={styles.modalText}>전체삭제?? </p>
        <div className={styles.modalButtons}>
          <button type="button">삭제</button>
          <button type="button" onClick={handleClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
export default MessageClearModal;
