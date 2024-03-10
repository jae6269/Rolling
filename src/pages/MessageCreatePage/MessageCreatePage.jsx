import { React, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
// eslint-disable-next-line import/no-relative-packages
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useMediaQuery } from 'react-responsive';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { POST_BASE_URL, PROFILE_IMAGE_URL } from '../../constants/fetchUrl';
import Dropdown from '../../components/Textfield';
import Header from '../../components/common/Header';
import styles from './messageCreatePage.module.scss';
import FileInput from '../../components/FileInput/FileInput';

function MessageCreatePage() {
  const [invalid, setInvalid] = useState(false);
  const [sender, setSender] = useState('');
  const [profileImage, setProfileImage] = useState(
    'https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png',
  );
  const [defaultImage, setDefaultImage] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [imageUrlList, setImageUrlList] = useState([]);
  const [text, setText] = useState('');
  const [plainText, setPlainText] = useState('');
  const [relation, setRelation] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditorToolbarChanged = useMediaQuery({ maxWidth: 624 });

  const messagesURL = `${POST_BASE_URL}/${id}/messages/`;

  // 서버에서 프로필 이미지 받아오기
  useEffect(() => {
    async function getData() {
      try {
        let imageUrls = [];
        const response = await fetch(PROFILE_IMAGE_URL);
        const result = await response.json();
        if (result.length !== 0) {
          ({ imageUrls } = result);
          setImageUrlList(imageUrls);
          setSelectedImage(imageUrls[0]);
          setDefaultImage(imageUrls[0]);
          imageUrls.shift();
        }
      } catch (error) {
        console.log(`${PROFILE_IMAGE_URL}에 대한 fetch error : ${error}`);
      }
    }
    getData();
  }, []);

  // 인풋에 입력한 보내는 이 변수 설정
  const handleSenderChange = e => {
    setSender(e.target.value);
  };

  // 인풋에서 Blur할 때 값이 없으면 오류메세지
  const handleInputBlur = () => {
    if (!sender.trim()) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };

  // 큰 원에 선택된 이미지를 클릭하면 다시 기본 이미지로 돌아감
  const handleSelectedImageClick = e => {
    e.target.src = defaultImage;
    setProfileImage(defaultImage);
    fileInputRef.current.value = '';
  };

  // 이미지를 선택하면 이미지를 어둡게 처리
  const handleProfileImageClick = e => {
    if (!e.target.src) {
      return;
    }
    setProfileImage(e.target.src);
    setSelectedImage(e.target.src);
    const profileImageArray = Array.from(
      e.target.parentElement.parentElement.children,
    );
    const profileImages = profileImageArray.slice(0, -2);
    // eslint-disable-next-line no-restricted-syntax
    for (const image of profileImages) {
      image.children[0].className = `${styles.profileImage}`;
    }
    e.target.className = `${styles.profileImage} ${styles.blur}`;
  };

  // 서버로 post 보낼 내용
  const newMessageInfo = {
    sender,
    relationship: relation,
    content: text,
    font,
    profileImageURL: profileImage,
  };
  console.log(newMessageInfo);
  // 서버에 리퀘스트 보낸 후 롤링페이퍼 페이지로이동
  const handleCreateMessage = async () => {
    try {
      await fetch(`${messagesURL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newMessageInfo),
      });

      navigate(`/post/${id}`);
    } catch (error) {
      console.log(`${messagesURL}에 대한 post error : ${error}`);
    }
  };

  const handleRelationChange = e => {
    setRelation(e.target.textContent);
  };

  const handleFontChange = e => {
    setFont(e.target.textContent);
  };

  // 에디터에 입력한 글자를 html코드로 변환해서 보냄
  const onEditorStateChange = state => {
    setEditorState(state);
    const stateToText = draftToHtml(
      convertToRaw(editorState.getCurrentContent()),
    );
    setPlainText(editorState.getCurrentContent().getPlainText('\u0001'));
    setText(stateToText);
  };

  // {imageUrls: ['https://learn-codeit...]}
  return (
    <>
      <Header buttonOn={false} />
      <div className={styles.content}>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="sender">
            From.
          </label>
          <input
            id="sender"
            placeholder="이름을 입력해 주세요."
            value={sender}
            onChange={handleSenderChange}
            className={`${styles.input} ${invalid ? styles.invalidInput : 'df'}`}
            onBlur={handleInputBlur}
          />
          {invalid && (
            <p className={styles.errorMessage}>값을 입력해 주세요.</p>
          )}
        </form>
        <h1>프로필 이미지</h1>
        <div className={styles.profileImageContainer}>
          {selectedImage && (
            <button
              type="button"
              onClick={handleSelectedImageClick}
              className={styles.selectedImageButton}
            >
              <img
                src={selectedImage}
                alt="selectedImage"
                className={styles.selectedImage}
              />
            </button>
          )}
          <div>
            <p className={styles.chooseProfileImage}>
              프로필 이미지를 선택해주세요!
            </p>
            <div className={styles.profileImages}>
              {imageUrlList &&
                imageUrlList.map(imageUrl => (
                  <button
                    type="button"
                    key={imageUrl}
                    onClick={handleProfileImageClick}
                    className={styles.profileImageButton}
                  >
                    <img
                      src={imageUrl}
                      alt="profileImage"
                      className={styles.profileImage}
                    />
                  </button>
                ))}
              <FileInput
                setSelectedImage={setSelectedImage}
                fileInputRef={fileInputRef}
                setProfileImage={setProfileImage}
              />
            </div>
          </div>
        </div>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="relation">
            상대와의 관계
          </label>
          <Dropdown
            id="relation"
            onChange={handleRelationChange}
            options={['지인', '동료', '친구', '가족']}
          />
        </form>
        <h1>내용을 입력해주세요</h1>
        <Editor
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          toolbar={{
            // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
            options: [
              'inline',
              'blockType',
              'fontSize',
              'list',
              'textAlign',
              'link',
              'emoji',
              'history',
            ],
            inline: {
              inDropdown: false,
              className: undefined,
              component: undefined,
              dropdownClassName: undefined,
              options: ['bold', 'italic', 'underline', 'strikethrough'],
            },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: false },
          }}
          wrapperStyle={{
            border: '1px solid var(--grayscale200)',
            borderRadius: '1rem',
            width: 'min(100%,45rem)',
            height: '16.25rem',
            margin: '0.75rem 0 3.125rem',
          }}
          toolbarStyle={{
            backgroundColor: 'var(--grayscale200)',
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
          }}
          editorStyle={{
            border: 'none',
            padding: '0 1.25rem',
            height: isEditorToolbarChanged ? '10rem' : '12rem',
          }}
          localization={{
            locale: 'ko',
          }}
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
        />
        <form className={styles.form}>
          <label className={styles.label} htmlFor="font">
            폰트 선택
          </label>
          <Dropdown
            id="font"
            onChange={handleFontChange}
            options={[
              'Noto Sans',
              'Pretendard',
              '나눔명조',
              '나눔손글씨 손편지체',
            ]}
          />
        </form>

        <button
          type="button"
          onClick={handleCreateMessage}
          className={`${styles.messageCreateButton} ${!sender.trim() || !plainText.trim() ? styles.disabledButton : ''}`}
          disabled={!sender.trim() || !plainText.trim()}
        >
          생성하기
        </button>
      </div>
    </>
  );
}
export default MessageCreatePage;
