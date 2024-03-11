import React from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../../../utils/imageImport';
import styles from './index.module.scss';
import Button from '../Button/Button';

// <Header buttonOn={false} /> 이런식으로 사용
function Header({ buttonOn = true }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerinside}>
        <Link to="/">
          <img className={styles.logo} src={logoImg} alt="로고 이미지" />
        </Link>
        {buttonOn && (
          <Link to="/post" className={styles.button}>
            <Button buttonStyle="outlined" buttonHeight={40}>
              롤링 페이퍼 만들기
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
