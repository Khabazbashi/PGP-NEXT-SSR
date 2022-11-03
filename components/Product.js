import styles from "../styles/Product.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Product({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            objectFit="contain"
            width={300}
            height={250}
            src={product.image}
          />
        </div>
        <p className={styles.productTitle}>{product.title}</p>
        <p className={styles.productCategory}> {product.category}</p>
        <p className={styles.productPrice}>$ {product.price}</p>
      </div>
    </Link>
  );
}
