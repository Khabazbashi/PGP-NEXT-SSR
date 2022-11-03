import styles from "../styles/Scrollbutton.module.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const ScrollButton = () => {
  const router = useRouter();
  const [scrollButton, setScrollButton] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    let button = document.getElementById("sbtn");
    setScrollButton(button);
  }, []);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <div>
      <button
        id="sbtn"
        className={styles.scrollBtn}
        onClick={() => topFunction()}
      >
        <img className={styles.buttonImage} src="/scrollButton.png" />
      </button>
    </div>
  );
};

export default ScrollButton;
