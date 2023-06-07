import styles from "../../styles/components/organism/Header.module.css";
import logo from "../../images/Title_image.png";
import { title } from "../atom";

const Header = () => {
  return (
    <div className={styles.div}>
      {title("Memory App")}
      <img className={styles.img} src={logo} alt="title" />
    </div>
  );
};

export default Header;
