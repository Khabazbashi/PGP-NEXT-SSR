import Link from "next/link";
import styles from "../../styles/Details.module.css";

const Product = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.productHeader}>
          <Link href="/products">
            <img src="/exit.png" alt="ExitIcon" />
          </Link>
        </div>

        <div className={styles.productContent}>
          <div className={styles.productDetails}>
            <p className={styles.productCategory}>{product.category}</p>
            <p className={styles.productTitle}>{product.title}</p>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>$ {product.price} </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              width={250}
              height={100}
              src={product.image}
              alt="Picture of product"
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.addButton}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};
export default Product;
