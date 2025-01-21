import MenuProduct from "./MenuProduct";
import styles from "./MenuCategory.module.css";

function MenuCategory({ menu }) {
  return (
    <div className={styles.container}>
      <h3>{menu.category}</h3>
      <div className={styles.types}>
        {menu.types.map((type, i) => (
          <MenuProduct type={type} key={i} />
        ))}
      </div>
    </div>
  );
}

export default MenuCategory;
