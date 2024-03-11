import React from 'react';
import styles from './fileInput.module.scss';
import { plus } from '../../utils/imageImport';

function FileInput({ setSelectedImage, fileInputRef, setProfileImage }) {
  // 파일이 업로드 되면 실행할 함수
  // 이미지 미리보기, 이미지 업로드 사이트에 이미지 업로드 하고 url받아와서 롤링 서버로 보내기
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
  };
  return (
    <>
      {/* label을 클릭하면 파일 업로드가 되게끔 하고 진짜 파일 인풋 부분은 숨김처리 */}
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
