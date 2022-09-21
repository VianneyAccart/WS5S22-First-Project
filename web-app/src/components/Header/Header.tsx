import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <h1>Wilders Book</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
