import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderSearch.module.css";

const HeaderSearch = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?keyword=${value}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        value={value}
        className={styles.input}
        type="text"
        placeholder="축제 검색해보세요 ex) 강원"
        onChange={handleChange}
        required
      />
      <button type="submit">
        <i className="fas fa-search" />
      </button>
    </form>
  );
};

export default HeaderSearch;
