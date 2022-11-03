import { useState, useEffect } from "react";
import styles from "../styles/Search.module.css";

const Search = ({ searchFunc }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    searchFunc(input);
  }, [input]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setInput("");
    searchFunc("");
  };

  return (
    <div className={styles.container}>
      <input
        placeholder="What do you want to shop?"
        className={styles.input}
        type="text"
        value={input}
        onInput={(e) => handleChange(e)}
      ></input>
      {input === "" && (
        <img
          className={styles.searchIcon}
          onClick={() => handleClick()}
          src="/search.png"
        />
      )}
      {input !== "" && (
        <img
          className={styles.exitIcon}
          onClick={() => handleClick()}
          src="/exit.png"
        />
      )}
    </div>
  );
};

export default Search;
