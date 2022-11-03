import { useState } from "react";
import styles from "../styles/Search.module.css";

const Search = ({ search }) => {
  const [input, setInput] = useState("");
  const [isFormActive, setIsFormActive] = useState(false);

  const handleChange = (e) => {
    if (isFormActive) {
      setInput(e.target.value);
      search(input);
    }
  };

  const handleClick = () => {
    setInput("");
    search("");
  };

  return (
    <div className={styles.container}>
      <input
        placeholder="What do you want to shop?"
        onFocus={() => setIsFormActive(true)}
        onBlur={() => setIsFormActive(false)}
        className={styles.input}
        type="text"
        value={input}
        onChange={(e) => handleChange(e)}
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
