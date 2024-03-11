import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './button.module.scss';
import {
  plus,
  smileBlack,
  smileWhite,
  deleted,
  deletedWhite,
} from '../../../utils/imageImport';

// 모달창에서 사용하는 버튼만
// 따로 만들어 주시면 될 것 같아요

// buttonStyle= 'plus'/'deleted'/'primary'/'secondary'/'outlined'
// buttonHeight= 56/40/36/28
// disabled=true/false값을 가지는 표현식
// mainpage/listpage의 primary button인 경우 main=true 사용
function Button({
  children,
  buttonStyle = 'primary',
  buttonHeight = 56,
  main = false,
  disabled = false,
  smile = false,
  onClick,
}) {
  const isPcScreen = useMediaQuery({ minWidth: 1200 });

  if (buttonStyle === 'plus') {
    return (
      <button
        className={styles.plus}
        onClick={onClick}
        disabled={disabled}
        type="button"
      >
        <img src={plus} alt="plus" />
      </button>
    );
  }
  if (buttonStyle === 'deleted') {
    return (
      <button
        className={styles.deleted}
        onClick={onClick}
        disabled={disabled}
        type="button"
      >
        <img src={disabled ? deletedWhite : deleted} alt="deleted" />
      </button>
    );
  }
  if (buttonStyle === 'primary') {
    let buttonWidth = '100%';
    if (main) {
      if (isPcScreen) {
        buttonWidth = '280px';
      } else {
        buttonWidth = '100%';
      }
    }
    return (
      <button
        className={styles.primary}
        onClick={onClick}
        disabled={disabled}
        style={{ height: `${buttonHeight}px`, width: `${buttonWidth}` }}
        type="button"
      >
        {children}
      </button>
    );
  }
  if (buttonStyle === 'secondary') {
    return (
      <button
        className={styles.secondary}
        onClick={onClick}
        disabled={disabled}
        style={{ height: `${buttonHeight}px` }}
        type="button"
      >
        {children}
      </button>
    );
  }
  if (buttonStyle === 'outlined') {
    let width = 0;
    if (buttonHeight === 56) {
      width = 192;
    } else {
      width = 122;
    }

    return (
      <button
        className={styles.outlined}
        onClick={onClick}
        disabled={disabled}
        style={{
          height: `${buttonHeight}px`,
          width: smile ? 'fit-content' : `${width}px`,
        }}
        type="button"
      >
        {smile &&
          (disabled ? (
            <img src={smileWhite} alt="smile" />
          ) : (
            <img src={smileBlack} alt="smile" />
          ))}
        {children}
      </button>
    );
  }
}

export default Button;
