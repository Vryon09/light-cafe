import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Socials.module.css";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Socials({ socialsSection }) {
  return (
    <div className={styles.container} ref={socialsSection}>
      <h2>Our Socials</h2>
      <div className={styles.socials}>
        <div>
          <FontAwesomeIcon
            icon={faFacebook}
            size="4x"
            className={styles.icon}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faInstagram}
            size="4x"
            className={styles.icon}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faXTwitter}
            size="4x"
            className={styles.icon}
          />
        </div>
      </div>
    </div>
  );
}

export default Socials;
