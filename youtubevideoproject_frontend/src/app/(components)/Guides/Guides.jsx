import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const Guides = () => {
  const data = [
    {
      id: 1,
      title: "Enter your YouTube video Link at the top of your browser.",
      color: "#4caf50",
    },
    {
      id: 2,
      title: "Click on Download Button",
      color: "#ffeb3b",
    },
    {
      id: 3,
      title: "Select your video quality",
      color: "#f57c00",
    },
    {
      id: 4,
      title: "Your video will start downloading",
      color: "#18ffff",
    },
  ];
  return (
    <Box pt={10}>
      <Container>
        <Grid container justifyContent="center" spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3" align="center" fontFamily="Poppins">
              How to Download
            </Typography>
          </Grid>

          {data.map((item, index) => (
            <Grid item xs={12} md={4} key={`Download-Guid-${index}`}>
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  py: 5,
                }}
              >
                <Box
                  sx={{
                    borderRadius: "50%",
                    padding: "20px 30px",
                    backgroundColor: item.color,
                  }}
                >
                  <Typography variant="h4" fontFamily="Poppins">
                    {item.id}
                  </Typography>
                </Box>
                <Typography variant="h6" fontFamily="Poppins">
                  {item.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Guides;
