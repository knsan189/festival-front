import React from "react";
import { Box, Grid, Typography, TextField, CardMedia, styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  borderTopRightRadius: 100,
  borderBottomLeftRadius: 100,
  overflow: "hidden",
  boxShadow: theme.shadows[6],
}));

const MainForm = () => {
  return (
    <Grid container spacing={4} alignItems="center" mt={2}>
      <Grid item md={5}>
        <Typography variant="h5" color="text.secondary">
          대한민국 축제
        </Typography>
        <Typography variant="h2">대한민국 축제</Typography>
        <TextField fullWidth />
        <Typography variant="h6">어디가 좋으세요?</Typography>
        <TextField fullWidth />
        <Typography variant="h6">언제 가시나요?</Typography>
        <TextField fullWidth />
      </Grid>
      <Grid item md={7}>
        <StyledBox>
          <CardMedia
            image="https://tong.visitkorea.or.kr/cms/resource/45/2950945_image2_1.jpg"
            sx={{ height: 640 }}
          />
        </StyledBox>
      </Grid>
    </Grid>
  );
};

export default MainForm;
