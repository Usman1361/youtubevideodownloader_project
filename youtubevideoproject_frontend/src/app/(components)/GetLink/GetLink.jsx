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
import CircularProgress from "@mui/material/CircularProgress";
const GetLink = () => {
  const [linkText, setLinkText] = useState("");
  const [linkData, setLinkData] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLinkData({});
    setError(false);
    setErrorMsg("");
    setLoading(true);
    let yid = "";

    if (linkText === "") {
      setError(true);
      setErrorMsg("Please enter a link!");
      setLoading(false);
      return;
    }
    // https://youtu.be/uZGSyzOb7BA?si=2eqT0GlpuAcjo5zE
    // https://youtu.be/gdgfegf0Scc?si=e_Nc5egw3zMpnmIq

    // second check to see if the link is a valid youtube link
    if (
      !linkText.includes("youtube.com") &&
      !linkText.includes("https://youtu.be")
    ) {
      setError(true);
      setErrorMsg("Please enter a valid youtube link!");
      setLoading(false);
      return;
    }
    if (linkText.includes("youtube.com")) {
      yid = linkText.split("=")[1];
    }
    if (linkText.includes("https://youtu.be")) {
      const yidb = linkText.split("/");
      const vidId = yidb[yidb.length - 1];
      yid = vidId.split("?")[0];
      console.log(yid);
    }
    try {
      await axios
        .get(`https://alldownload4u.vercel.app/api/yt/download/${yid}`)
        .then((response) => {
          setLoading(false);
          setLinkData(response.data);
        });
    } catch (error) {
      setError(true);
      setLoading(false);
      setErrorMsg("Something Went Wrong!");
    }
  };
  return (
    <section>
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
                  disabled={loading}
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

          {/* // to display any error here  */}
          <p
            style={{ color: "#ff5252", textAlign: "center", fontSize: "15px" }}
          >
            {error ? errorMsg : ""}
          </p>

          {/* // by using mui displaying the thumbnail title and 3 differents links
          comping from the backend */}
          {linkData ? (
            <Grid
              container
              style={{
                marginTop: "50px",
              }}
            >
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={linkData.thumb}
                    style={{ width: "100%", height: "100%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Poppins",
                      marginY: { xs: "20px", md: "0px" },
                    }}
                  >
                    {linkData?.title}
                  </Typography>
                </Box>
                {/* // as in linkData we have a array of links we are using map to
              display three links // and using the a tag to download the video */}
                {linkData?.links?.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <a
                      href={item.link}
                      download
                      style={{
                        textDecoration: "none",
                        color: "#fff",
                        backgroundColor: "#ff5252",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        margin: "10px 0px",
                        cursor: "pointer",
                      }}
                      target="_blank"
                    >
                      {item.quality}
                    </a>
                  </Box>
                ))}
              </Grid>
            </Grid>
          ) : (
            ""
          )}
        </Container>
      </Box>
      {
        // to display the loading icon
        loading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress sx={{ color: "#ff5252" }} />
          </Box>
        ) : (
          ""
        )
      }
    </section>
  );
};

export default GetLink;
