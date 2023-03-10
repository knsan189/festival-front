import React, { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderSearch.module.css";

const HeaderSearch = () => {
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.stopPropagation();
    navigate("/searchlist", {
      replace: true,
      state: {
        keyword: inputRef.current?.value,
      },
    });
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="축제 검색해보세요 ex) 강원"
      />
      <button type="submit">
        <i className="fas fa-search" />
      </button>
    </form>
  );
};

export default HeaderSearch;
