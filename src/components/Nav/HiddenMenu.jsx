import styles from "./HiddenMenu.module.css";

function HiddenMenu({
  isMenuOpen,
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
    <>
      <div
        onClick={() => setIsMenuOpen(false)}
        className={styles.cover}
        style={isMenuOpen ? { display: "block" } : {}}
      ></div>
      <div className={styles.container} style={isMenuOpen ? { top: 0 } : {}}>
        <div className={styles.closeContainer}>
          <p onClick={() => setIsMenuOpen(false)} className={styles.close}>
            &#10005;
          </p>
        </div>
        <div className={styles.options}>
          <button>
            <p onClick={() => handleButton(menuSection)}>Menu</p>
          </button>
          <button>
            <p onClick={() => handleButton(locSection)}>Location & Hours</p>
          </button>
          <button>
            <p onClick={() => handleButton(socialsSection)}>Socials</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default HiddenMenu;
