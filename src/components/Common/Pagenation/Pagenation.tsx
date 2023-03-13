import React, { useMemo } from "react";
import styles from "./Pagenation.module.css";

interface Props {
  totalCount: number;
  pageNo: number;
  numOfRows: number;
  onChangePageNo: (pageNo: number) => void;
}

const Pagenation = ({ numOfRows, totalCount, pageNo, onChangePageNo }: Props) => {
  const pageList = useMemo(() => {
    const temp: number[] = [];
    for (let i = 1; numOfRows * i < totalCount; i += 1) {
      temp.push(i);
    }
    return temp;
  }, [numOfRows, totalCount]);

  return (
    <ul className={styles.pageList}>
      {pageList.map((page) => (
        <li className={styles.pageNum} key={page}>
          <button
            type="button"
            className={pageNo === page ? styles.active : styles.button}
            onClick={() => onChangePageNo(page)}
          >
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default Pagenation;
