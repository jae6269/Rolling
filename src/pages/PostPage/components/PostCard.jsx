import React from 'react';
import { plusLogo } from '../../../utils/imageImport';
import styles from './postCard.module.scss';

function PostCard() {
  return (
    <button className={styles.postButton} type="button">
      <img src={plusLogo} alt="post button" />
    </button>
  );
}
export default PostCard;
