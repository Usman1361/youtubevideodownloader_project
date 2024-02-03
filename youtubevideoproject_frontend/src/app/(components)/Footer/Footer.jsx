import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
const Footer = () => {
  const ownerData = [
    {
      name: "usman-portfolio-app.netlify.app/",
      link: "https://usman-portfolio-app.netlify.app/",
    },
    {
      name: "codexharoon.com",
      link: "https://codexharoon.com",
    },
  ];
  return (
    <footer>
      <Box sx={{ backgroundColor: "#242B2E", color: "white" }}>
        <Container>
          <Grid container pb={10}>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography pt={4} pb={3} variant="h5" fontFamily="Poppins">
                Alldownload4u
              </Typography>
              <Typography variant="body2" fontFamily="Poppins">
                Alldownload4u is a free online video downloader tool. Where you
                can download any youtube video in any quality.
              </Typography>
            </Grid>
            <Grid item pl={3} xs={12} md={4}>
              <Typography
                pt={4}
                pb={1}
                variant="h5"
                fontFamily="Poppins"
                sx={{ textAlign: "center" }}
              >
                Contact Us
              </Typography>
              <Box>
                {ownerData.map((item, index) => (
                  <Box sx={{ display: "flex" }} key={index}>
                    <Button
                      variant="outlined"
                      fontFamily="Poppins"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      sx={{ marginRight: "10px", border: "none" }}
                    >
                      <LanguageIcon />
                    </Button>
                    <Button
                      variant="text"
                      fontFamily="Poppins"
                      sx={{ color: "white" }}
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.name}
                    </Button>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
              <Typography pt={4} pb={3} variant="h5" fontFamily="Poppins">
                About Us
              </Typography>
              <Typography variant="body2" fontFamily="Poppins">
                We are a team of 2 people. We are working on this project to
                provide you the best service for free.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              backgroundColor: "#9fa8da",
              color: "white",
              padding: "10px 0px",
            }}
            variant="body2"
            fontFamily="Poppins"
          >
            © 2024. All Rights Reserved! . Alldownload4u . ( Design and
            Developed by{" "}
            <a
              style={{
                color: "white",
              }}
              href="https://www.linkedin.com/in/codexharoon/"
              target="_blank"
              rel="noreferrer"
            >
              CodexHaroon
            </a>{" "}
            and{" "}
            <a
              style={{
                color: "white",
              }}
              href="https://www.linkedin.com/in/muhammad-usman-aa7023230/"
              target="_blank"
              rel="noreferrer"
            >
              Muhammad Usman
            </a>
            {""} )
          </Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
