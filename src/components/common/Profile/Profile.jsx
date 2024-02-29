import React from 'react';
import RelationBadge from '../badge/RelationBadge ';
import styles from './profile.module.scss';

function Profile({ profileImageURL, sender, relationship, font }) {
  return (
    <div className={styles.profile}>
      <img
        className={styles.profileImg}
        src={profileImageURL}
        alt="profileImgae"
      />
      <div className={styles.information}>
        <div className={styles.sender}>
          <span className={styles.from} style={{ fontFamily: font }}>
            From.
          </span>
          <span className={styles.name} style={{ fontFamily: font }}>
            {sender}
          </span>
        </div>
        <RelationBadge relationship={relationship} />
      </div>
    </div>
  );
}
export default Profile;
