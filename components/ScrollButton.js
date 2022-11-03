import { useEffect, useState } from "react";
import styles from "../styles/ScrollButton.module.css";

const ScrollButton = () => {
  const [button, setButton] = useState();

  useEffect(() => {
    if (typeof document !== "undefined") {
      setButton(document.getElementById("scrollBtn"));
    }
  }, []);

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <button
        id="scrollBtn"
        className={styles.scrollBtn}
        onClick={() => topFunction()}
      >
        <img className={styles.buttonImage} src="/scrollButton.png" />
      </button>
    </div>
  );
};

export default ScrollButton;
