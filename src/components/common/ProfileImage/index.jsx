import React from 'react';
import useFetchData from '../../../hooks/useFetchData';

function ProfileImage({ width, height }) {
  const imageData = useFetchData(
    'https://rolling-api.vercel.app/profile-images',
  );

  return (
    <div>
      {imageData &&
        imageData.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt="Profile"
            width={width}
            height={height}
          />
        ))}
    </div>
  );
}

export default ProfileImage;
