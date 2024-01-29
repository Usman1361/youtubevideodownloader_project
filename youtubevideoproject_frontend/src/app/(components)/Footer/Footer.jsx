import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#242B2E", color: "white" }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" fontFamily="Poppins">
                Alldownload4u
              </Typography>
              <Typography variant="body2" fontFamily="Poppins">
                Alldownload4u is a free online video downloader tool. Where you
                can download any youtube video in any quality.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
