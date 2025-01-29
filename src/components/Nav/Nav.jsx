import styles from "./Nav.module.css";

function Nav({
  setIsMenuOpen,
  menuSection,
  locSection,
  socialsSection,
  scrollToRef,
}) {
  function handleButton(ref) {
    scrollToRef(ref);
    setIsMenuOpen(false);
  }

  return (
    <nav className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logoWrapper}>
          {/* <img
            className={styles.logo}
            src={`${import.meta.env.BASE_URL}/cafe-logo.png`}
            alt="Coffee shop"
          /> */}
          <h1>
            Logo <br /> Here
          </h1>
        </div>

        {/* <div className={styles.menu}>
        <ul>
          <li>Menu</li>
          <li>Contact</li>
          <li>Location & Hours</li>
        </ul>
        </div> */}

        <div className={styles.hamburgerWrapper}>
          <p onClick={() => setIsMenuOpen(true)}>|||</p>
        </div>

        <div className={styles.navMenu}>
          <ul>
            <li onClick={() => handleButton(menuSection)}>Menu</li>
            <li onClick={() => handleButton(locSection)}>Location & Hours</li>
            <li onClick={() => handleButton(socialsSection)}>Socials</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
