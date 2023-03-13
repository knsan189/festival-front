import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagenation from "../../components/Common/Pagenation/Pagenation";
import SearchItem from "../../components/Search/SearchItem";
import FestivalService from "../../service/FesitvalService";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [options, setOptions] = useState<{ numOfRows: number; totalCount: number }>({
    numOfRows: 30,
    totalCount: 0,
  });
  const [pageNo, setPageNo] = useState(1);
  const onChangePageNo = useCallback((newPageNo: number) => {
    setPageNo(newPageNo);
  }, []);

  const keyword = searchParams.get("keyword") || "";

  useEffect(() => {
    (async () => {
      const { response } = await FestivalService.searchFestival({ keyword, pageNo });
      const { items, numOfRows, totalCount } = response.body;
      setFestivals(items.item || []);
      setOptions({ numOfRows, totalCount });
    })();
  }, [keyword, pageNo]);

  return (
    <>
      <h1>
        {keyword} 검색한 결과 총 {options.totalCount}건
      </h1>
      <ul>
        {festivals.length > 0 ? (
          festivals.map((festival) => <SearchItem festival={festival} key={festival.contentid} />)
        ) : (
          <p>검색 결과가 없습니다</p>
        )}
      </ul>
      <Pagenation {...options} pageNo={pageNo} onChangePageNo={onChangePageNo} />
    </>
  );
};

export default Search;
