import React from 'react';
import { plusLogo } from '../../../utils/imageImport';
import styles from './postButton.module.scss';

function PostButton() {
  return (
    <button className={styles.postButton} type="button">
      <img src={plusLogo} alt="post button" />
    </button>
  );
}
export default PostButton;
