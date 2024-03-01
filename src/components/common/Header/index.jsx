import logoImg from "../../../assets/logo-img.svg";
import styles from "./index.module.scss";

//<Header buttonOn={true} /> 이런식으로 사용
function Header({ buttonOn }) {
  return (
    <div className={styles.header}>
      <div className={styles.headerinside}>
        <img className={styles.logo} src={logoImg} alt="로고 이미지" />
        {/* 버튼 컴포넌트 scss: 상민님 */}
        {buttonOn && (
          <button className={styles.button}>롤링 페이퍼 만들기</button>
        )}
      </div>
    </div>
  );
}

export default Header;