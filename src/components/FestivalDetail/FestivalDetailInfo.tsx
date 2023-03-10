/* eslint-disable react/no-danger */
import React from "react";

interface Props {
  info: FestivalDetailInfo;
}

const FestivalDetailInfo = ({ info }: Props) => {
  const { infoname, infotext } = info;
  return (
    <li>
      <h3>{infoname}</h3>
      <pre dangerouslySetInnerHTML={{ __html: infotext }} />
    </li>
  );
};
export default FestivalDetailInfo;
