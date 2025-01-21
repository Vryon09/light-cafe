import { menu } from "../../data/MenuData";
import styles from "./Menu.module.css";
import MenuCategory from "./MenuCategory";

function Menu({ menuSection }) {
  return (
    <div className={styles.container} ref={menuSection}>
      <div className={styles.headerWrapper}>
        <h2>Menu</h2>
      </div>

      <div className={styles.category}>
        {menu.map((menu, i) => (
          <MenuCategory key={i} menu={menu} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
