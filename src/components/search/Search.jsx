import { useState } from "react";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [textInput, setTextInput] = useState("");
  const navigate = useNavigate();

  const onHandleChangeText = (e) => setTextInput(e.target.value);
  const onSubmitSearch = (e) => {
    e.preventDefault();
    const searchElement = textInput.replace(" ", "+");
    navigate(`/book/${searchElement}`);
  };

  return (
    <div className={styles.InputArea}>
      <form onSubmit={onSubmitSearch}>
        <input
          className={styles.InputBox}
          type="text"
          placeholder="Search..."
          onChange={onHandleChangeText}
          value={textInput}
        />
      </form>
    </div>
  );
};

export default Search;
