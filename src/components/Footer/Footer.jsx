import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.section}>
        <p>Follow us on:</p>
        <div>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>X</p>
        </div>
      </div>
      <div className={styles.section}>
        <p>Email us at:</p>
        <div>
          <p>cafename@gmail.com</p>
        </div>
      </div>
      <p>© 2025 Café Name Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
