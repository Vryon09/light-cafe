import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LocationNHours.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function LocationNHours({ locSection }) {
  return (
    <div className={styles.container} ref={locSection}>
      <h2>Find Us</h2>
      <div className={styles.locationIcon}>
        <FontAwesomeIcon icon={faLocationDot} size="2xl" color="#212529" />
      </div>
      <div className={styles.infos}>
        <p>123 Elm Street, Downtown City, TX 75201</p>
        <div>
          <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
          <p>Saturday: 10:00 AM - 6:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
}

export default LocationNHours;
