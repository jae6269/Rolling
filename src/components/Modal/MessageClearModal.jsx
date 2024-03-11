import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './messageClearModal.module.scss';

function MessageClearModal({ url, handleClose }) {
  const navigate = useNavigate();
  const handleMessageClear = async e => {
    e.preventDefault();
    handleClose(e);
    try {
      await fetch(url, {
        method: 'DELETE',
      });
      // 패치 요청이 완료되면 리스트로 이동
      navigate('/list');
    } catch (error) {
      console.error('롤링 페이퍼 삭제 중 오류가 발생했습니다:', error);
    }
  };
  return (
    <div className={styles.clearModalBackground}>
      <div className={styles.clearModal}>
        <p className={styles.modalText}>
          이 롤링 페이퍼를
          <br />
          삭제할까요?
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
