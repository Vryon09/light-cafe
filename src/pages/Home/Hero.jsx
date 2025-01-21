import styles from "./Hero.module.css";

function Hero({ scrollToRef, menuSection }) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImg}>
        <img
          src="./light-cafe/coffee-blender-2.jpg"
          alt="coffee-blender"
          loading="lazy"
        />
      </div>
      <div className={styles.heroText}>
        <h1>Start your day with a cup of joy</h1>
        <p>
          Welcome to Bo•Bean Café, where every cup tells a story and every bite
          sparks joy. Sit back, relax, and let us treat you to the finest coffee
          and freshest pastries in town.
        </p>
        <button onClick={() => scrollToRef(menuSection)}>View Menu</button>
      </div>
    </section>
  );
}

export default Hero;
