import React from 'react';
import RelationBadge from '../badge/RelationBadge ';
import './profile.scss';

function Profile({ profileImageURL, sender, relationship }) {
  return (
    <div className="profile">
      <img className="profile-img" src={profileImageURL} alt="profileImgae" />
      <div className="profile-info">
        <div className="profile-info-sender">
          <span className="sender-from">From.</span>
          <span className="sender-name">{sender}</span>
        </div>
        <RelationBadge relationship={relationship} />
      </div>
    </div>
  );
}
export default Profile;
