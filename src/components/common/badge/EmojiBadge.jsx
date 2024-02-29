import React from 'react';
import PropTypes from 'prop-types';

import styles from './BadgeDesign.module.scss';

// eslint-disable-next-line react/prop-types
function EmojiBadge({ children }) {
  return (
    <div className={styles.badge}>
      <div className={styles.badge_emoji}>
        <div className={styles.ic}>{children}</div>
        <div className={styles.img_text}>24</div>
      </div>
    </div>
  );
}

export default EmojiBadge;
