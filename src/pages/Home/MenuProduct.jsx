import styles from "./MenuProduct.module.css";

function MenuProduct({ type }) {
  return (
    <div className={styles.container}>
      <h4>{type.type}</h4>
      <div className={styles.products}>
        {type.menu.map((product, i) => (
          <div className={styles.product} key={i}>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.description}>{product.description}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuProduct;
