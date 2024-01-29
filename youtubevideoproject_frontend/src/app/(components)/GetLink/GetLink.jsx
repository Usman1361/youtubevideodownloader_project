import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import DownloadIcon from "@mui/icons-material/Download";

const GetLink = () => {
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
                  label="Youtube Link"
                  variant="outlined"
                  sx={{ width: { xs: "100%", md: "70%" } }}
                />

                <Button
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
