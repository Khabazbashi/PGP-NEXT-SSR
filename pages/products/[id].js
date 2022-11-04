import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import styles from "../../styles/Details.module.css";

const Product = ({ product }) => {
  return (
    <div className={styles.detailsContainer}>
      <Navbar />
      <div className={styles.productContainer}>
        <div className={styles.productHeader}>
          <Link href="/products">
            <img className={styles.exitIcon} src="/exit.png" alt="ExitIcon" />
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
              objectFit="contain"
              width={400}
              height={400}
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

const getAllProducts = async () => {
  return await fetch("https://fakestoreapi.com/products/").then((res) =>
    res.json()
  );
};

export async function getStaticPaths() {
  const products = await getAllProducts();
  const paths = products.map((product) => ({
    params: { id: `${product.id}` },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();
  if (!product) return { notFound: true };
  return {
    props: { product },
    revalidate: 10,
  };
}
