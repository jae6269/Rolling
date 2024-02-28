import React from 'react';
import './BadgeDesign.scss'; // sCSS 파일 가져오기

function EmogeBadge() {
  return (
    <div className="badge">
      <div className="badge_emoji">
        <div className="ic">😍</div>
        <div className="img_text">24</div>
      </div>
    </div>
  );
}

export default EmogeBadge;
