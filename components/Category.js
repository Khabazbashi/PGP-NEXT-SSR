import { useState, useEffect } from "react";

import styles from "../styles/Category.module.css";

const Filterelement = ({ category, filterFunc }) => {
  const [isFilterActive, setFilterActive] = useState(true);

  useEffect(() => {}, [handleClick]);

  function handleClick() {
    setFilterActive(!isFilterActive);
    var item = document.getElementById(category);
    if (isFilterActive) {
      item.style = "background-color:#c97f3e";
    } else {
      item.style = "background-color:white";
    }
    filterFunc(category);
  }

  return (
    <div>
      <p
        className={styles.category}
        id={`${category}`}
        onClick={() => handleClick()}
      >
        {category}
      </p>
    </div>
  );
};

export default Filterelement;
