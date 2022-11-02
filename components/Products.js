import Product from "./Product";
import styles from "../styles/Products.module.css";

export default function Products({ products }) {
  return (
    <div className={styles.container}>
      {products.map((product, i) => {
        return <Product key={i} product={product} />;
      })}
    </div>
  );
}
