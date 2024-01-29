import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
const Footer = () => {
  const ownerData = [
    {
      name: "Muhammad Usman",
      link: "https://usman-portfolio-app.netlify.app/",
    },
    {
      name: "Muhammad Haroon",
      link: "https://codexharoon.com/",
    },
  ];
  return (
    <>
      <Box sx={{ backgroundColor: "#242B2E", color: "white" }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography pt={4} pb={3} variant="h5" fontFamily="Poppins">
                Alldownload4u
              </Typography>
              <Typography variant="body2" fontFamily="Poppins">
                Alldownload4u is a free online video downloader tool. Where you
                can download any youtube video in any quality.
              </Typography>
            </Grid>
            <Grid item pl={3} xs={12} md={4}>
              <Typography pt={4} pb={3} variant="h5" fontFamily="Poppins">
                Contact Us
              </Typography>
              <Box sx={{ display: "flex" }}>
                {ownerData.map((item) => (
                  <>
                    <Button
                      variant="outlined"
                      fontFamily="Poppins"
                      href={item.link}
                      sx={{ marginRight: "10px" }}
                    >
                      <LanguageIcon />
                    </Button>
                  </>
                ))}
              </Box>

              <Typography variant="body2" fontFamily="Poppins">
                Email:
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
