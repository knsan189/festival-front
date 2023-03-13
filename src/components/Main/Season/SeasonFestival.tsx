import React, { useMemo } from "react";
import { Card, CardMedia, Grid, CardHeader, CardActionArea, Chip, Box } from "@mui/material";
import moment from "moment";
import { useNavigate } from "react-router-dom";

interface Props {
  festival: Festival;
}
const SeasonFestival = ({ festival }: Props) => {
  const navigate = useNavigate();
  const { title, eventstartdate, eventenddate, firstimage } = festival;
  const img = firstimage ? firstimage.replace("http", "https") : "images/noimage1.jpg";

  const checkExpired = useMemo(() => {
    const today = Date.now();
    const end = new Date(moment(eventenddate).format()).getTime();
    const start = new Date(moment(eventstartdate).format()).getTime();
    if (end < today) {
      return <Chip variant="filled" color="default" label="종료됨" />;
    }
    if (start < today) {
      return <Chip variant="filled" color="primary" label="진행중" />;
    }
    return <Chip variant="filled" color="secondary" label="예정중" />;
  }, [eventenddate, eventstartdate]);

  const subtitle = `${moment(eventstartdate).format("YYYY년 MM월 DD일")} ~ ${moment(
    eventenddate,
  ).format("YYYY년 MM월 DD일")}`;

  const handleClick = () => {
    navigate(`/festival/${festival.contentid}`);
  };

  return (
    <Grid item md={3}>
      <Card>
        <CardActionArea onClick={handleClick}>
          <CardMedia image={img} sx={{ height: 170 }} />
          <CardHeader
            title={title}
            subheader={subtitle}
            titleTypographyProps={{ noWrap: true, variant: "subtitle1" }}
            sx={{ "*.MuiCardHeader-content": { overflow: "hidden" } }}
          />
          <Box position="absolute" top={16} right={16}>
            {checkExpired}
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SeasonFestival;
