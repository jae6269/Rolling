import React from 'react';
import styles from './fileInput.module.scss';
import { plus } from '../../utils/imageImport';

function FileInput({ setSelectedImage, fileInputRef, setProfileImage }) {
  const handleFileInputChange = async e => {
    const fileUrl = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(fileUrl);

    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=5b5d33f0487caad6c6fd4716af61c719`,
        {
          method: 'POST',
          // headers: { 'Content-Type': 'application/json' },
          body: formData,
        },
      );
      const result = await response.json();
      setProfileImage(result.data.url);
    } catch (error) {
      console.log(
        `https://api.imgbb.com/1/upload에 대한 post error : ${error}`,
      );
    }

    // const { files } = e.target;
    // const uploadFile = files[0];
    // const reader = new FileReader();
    // reader.readAsDataURL(uploadFile);
    // reader.onloadend = () => {
    //   setSelectedImage(reader.result);
    //   setProfileImage(reader.result);
    // };
  };
  return (
    <>
      <label className={styles.inputFileButton} htmlFor="input-file">
        <img className={styles.inputFileButtonImage} src={plus} alt="addFile" />
      </label>
      <input
        type="file"
        id="input-file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleFileInputChange}
        ref={fileInputRef}
      />
    </>
  );
}

export default FileInput;
