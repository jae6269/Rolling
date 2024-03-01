import React from 'react';
import styles from './profileImages.module.scss';
import ProfileImage from '../ProfileImage';

function ProfileImages({ recipientResult }) {
  console.log(recipientResult.recentMessages);
  return (
    <div className={styles.profileImages}>
      {recipientResult.recentMessages.reverse().map((message, i) => {
        recipientResult.recentMessages.reverse();
        const length = recipientResult.messageCount;
        const distance =
          length >= 3 ? 3 - i : length === 3 ? 2 - i : length === 2 ? 1 - i : 0;
        return (
          <div
            key={message.id}
            style={{ zIndex: i, position: 'absolute', right: `${distance}rem` }}
          >
            <ProfileImage
              url={message.profileImageURL}
              //rem단위 인식 X
              width={'28px'}
              height={'28px'}
            />
          </div>
        );
      })}
      {recipientResult.messageCount >= 4 && (
        <div className={styles.messageCount}>
          +{recipientResult.messageCount - 3}
        </div>
      )}
    </div>
  );
}

export default ProfileImages;
