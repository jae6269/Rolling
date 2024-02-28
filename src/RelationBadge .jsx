import React from 'react';
import PropTypes from 'prop-types'; 
import './BadgeDesign.scss';

function RealtionBadge({ relationship }) {
  // 파라미터를 제거하여 상위 스코프의 relationship 직접 사용
  const getBadgeDetails = () => {
    switch (relationship) {
      case '가족':
        return { containerClass: 'family-container', text: '가족', textClass: 'family-text' };
      case '동료':
        return { containerClass: 'badge-college-container', text: '동료', textClass: 'badge-college-text' };
      case '친구':
        return { containerClass: 'friends-container', text: '친구', textClass: 'friends-text' };
      case '지인':
        return { containerClass: 'container', text: '지인', textClass: 'text' };
      default:
        return { containerClass: 'default-container', text: '알 수 없음', textClass: 'default-text' };
    }
  };

  const { containerClass, text, textClass } = getBadgeDetails();

  return (
    <div className={containerClass}>
      <div className={textClass}>
        {text}
      </div>
    </div>
  );
}

// PropTypes를 사용하여 relationship prop의 타입 검증
RealtionBadge.propTypes = {
  relationship: PropTypes.string.isRequired,
};

export default RealtionBadge;
