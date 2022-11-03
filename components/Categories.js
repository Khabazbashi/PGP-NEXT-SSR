import Category from "./Category";
import styles from "../styles/Categories.module.css";

const Categories = ({ categories, filterFunc }) => {
  return (
    <div className={styles.container}>
      {categories.map((category, i) => {
        return <Category key={i} category={category} filterFunc={filterFunc} />;
      })}
    </div>
  );
};

export default Categories;
