import styles from "../styles/Product.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Product({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={product.image} />
        </div>
        <div className={styles.contentContainer}>
          <a className={styles.productTitle}>{product.title}</a>
          <a className={styles.productCategory}> {product.category}</a>
          <a className={styles.productPrice}>$ {product.price}</a>
        </div>
      </div>
    </Link>
  );
}
