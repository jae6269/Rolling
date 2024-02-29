import React from 'react';

const Card = ({
  name,
  backgroundColor,
  backgroundImageURL,
  messageCount,
  topReactions,
}) => {
  const style = {
    backgroundColor,
    backgroundImage: `url(${backgroundImageURL})`,
  };

  return (
    <div className="card" style={style}>
      <div className="card-header">To. {name}</div>
      <div className="card-body">
        <div className="message-count">{messageCount}명이 작성했어요!</div>
      </div>
      {/* <div className="card-footer">
        {topReactions
          .map
          // 버튼 컴포넌트 들어갈 예정
          ()}
      </div> */}
    </div>
  );
};

export default Card;
