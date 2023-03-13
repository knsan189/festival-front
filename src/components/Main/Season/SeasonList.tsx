import React, { useCallback, useEffect, useState } from "react";
import { Button, Box, Grid, Typography } from "@mui/material";
import Loading from "../../Common/Loading/Loading";
import SeasonFestival from "./SeasonFestival";
import Season from "./SeasonItem";
import styles from "./SeasonList.module.css";
import FestivalService from "../../../service/FesitvalService";
import { SEASON_LIST } from "../../../config/const";

const SeasonList = () => {
  const [loading, setLoading] = useState(false);
  const [activeSeason, setActiveSeason] = useState<Season>(SEASON_LIST[0]);
  const [show, setShow] = useState<number>(0);
  const [festivals, setFestivals] = useState<Festival[]>([]);

  const showDown = () => {
    setShow(show === 0 ? show + 1 : show - 1);
    if (show === 1) window.scrollTo(0, 0);
  };

  const onChangeSeason = useCallback((season: Season) => {
    setActiveSeason(season);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { response } = await FestivalService.seasonData(
          activeSeason.start,
          activeSeason.end,
          12,
        );
        setFestivals(response.body.items.item);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [activeSeason]);

  return (
    <div className={styles.seasonBox}>
      <Typography variant="h4">
        #계절별 축제 모아보기{" "}
        <Typography variant="h4" component="span" color="primary">
          #{activeSeason.name}
        </Typography>
      </Typography>
      <ul className={styles.season}>
        {SEASON_LIST.map((season) => (
          <Season
            key={season.id}
            season={season}
            onChange={onChangeSeason}
            activeSeason={activeSeason}
          />
        ))}
      </ul>

      <Grid container spacing={2}>
        {loading ? (
          <Loading />
        ) : (
          festivals.map((festival) => (
            <SeasonFestival key={festival.contentid} festival={festival} />
          ))
        )}
      </Grid>

      <Box mt={2} textAlign="center">
        {show === 0 ? (
          <Button variant="outlined" size="large" onClick={() => showDown()}>
            축제 더보기
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="large"
            className={styles.minusButton}
            onClick={() => showDown()}
          >
            목록 접기
          </Button>
        )}
      </Box>
    </div>
  );
};

export default SeasonList;
