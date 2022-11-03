import Product from "./Product";
import styles from "../styles/Products.module.css";

export default function Products({ products }) {
  if (products.length !== 0) {
    return (
      <div className={styles.container}>
        {products.map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.noProductContainer}>
          <p className={styles.noProductText}>No products where found. </p>
        </div>
      </div>
    );
  }
}
