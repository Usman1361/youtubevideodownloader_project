// converting component into client side component
"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import axios from "axios";

const GetLink = () => {
  const [linkText, setLinkText] = useState("");
  const handleDownload = async () => {
    if (linkText === "") {
      alert("Please enter a link");
      return;
    }

    const yid = linkText.split("=")[1];
    console.log(yid);

    const response = await axios.get(
      `http://localhost:8888/api/yt/download/${yid}`
    );
    console.log(response.data);
  };
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                pb={5}
                variant="h3"
                sx={{ textAlign: "center", fontFamily: "Poppins" }}
              >
                Enter your Youtube Video Link
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <TextField
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  label="Youtube Link"
                  variant="outlined"
                  sx={{ width: { xs: "100%", md: "70%" } }}
                />

                <Button
                  onClick={handleDownload}
                  variant="contained"
                  sx={{
                    borderRadius: "0px 8px 8px 0px",
                    backgroundColor: "#ff5252",
                  }}
                >
                  <DownloadIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default GetLink;
