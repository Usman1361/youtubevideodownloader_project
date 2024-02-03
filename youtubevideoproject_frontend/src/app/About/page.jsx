import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
} from "@mui/material";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

export const metadata = {
  title: "AllDownload4u",
  description:
    "Download Youtube Videos in all formats. Our YouTube Video Downloader tool is designed to help users easily download videos from YouTube for offline viewing. With its user-friendly interface and intuitive design, you can quickly download your favorite videos in various formats and resolutions.Our tool respects YouTube's terms of service and does not promote the unauthorized downloading of copyrighted content. It is intended for personal and fair use only.",
};

const AboutPage = () => {
  return (
    <main>
      <Box>
        <Container>
          <Typography variant="h4" gutterBottom sx={{ fontFamily: "Poppins" }}>
            About Alldownload4u
          </Typography>
          <Typography variant="body1">
            Our YouTube Video Downloader tool is designed to help users easily
            download videos from YouTube for offline viewing. With its
            user-friendly interface and intuitive design, you can quickly
            download your favorite videos in various formats and resolutions.
          </Typography>
          <Typography variant="body1">
            Our tool respects YouTube's terms of service and does not promote
            the unauthorized downloading of copyrighted content. It is intended
            for personal and fair use only.
          </Typography>
          <Typography
            mt={10}
            variant="h4"
            gutterBottom
            sx={{ fontFamily: "Poppins" }}
          >
            Disclaimer
          </Typography>
          <Typography variant="body1">
            This tool is provided for informational purposes only. We do not
            endorse the downloading of copyrighted materials without proper
            authorization. Users are responsible for ensuring they comply with
            all relevant laws and YouTube's terms of service when using this
            tool.
          </Typography>
          <Typography
            mt={10}
            variant="h4"
            gutterBottom
            sx={{ fontFamily: "Poppins" }}
          >
            Frequently Asked Questions (FAQ)
          </Typography>
          <Accordion
            sx={{
              backgroundColor: "#448aff",
              marginBottom: "20px",
              color: "#ffff",
            }}
          >
            <AccordionSummary>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="h6">
                  Is it legal to download YouTube videos?
                </Typography>

                <ArrowCircleDownIcon
                  fontSize="large"
                  sx={{ marginTop: { xs: "15px", md: "0px" } }}
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Downloading YouTube videos may infringe on YouTube's terms of
                service and copyright laws. It's essential to check YouTube's
                terms and conditions and ensure you have the necessary rights to
                download and use the videos.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#448aff",
              marginBottom: "20px",
              color: "#ffff",
            }}
          >
            <AccordionSummary>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="h6">
                  What formats are supported for downloading videos?
                </Typography>
                <ArrowCircleDownIcon
                  fontSize="large"
                  sx={{ marginTop: { xs: "15px", md: "0px" } }}
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                Our YouTube Video Downloader tool supports various formats,
                including MP4, WebM, and 3GP, among others. You can choose the
                format that best suits your needs before downloading the video.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#448aff",
              marginBottom: "20px",
              color: "#ffff",
            }}
          >
            <AccordionSummary>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="h6">
                  Is the downloaded content of high quality?
                </Typography>
                <ArrowCircleDownIcon
                  sx={{ marginTop: { xs: "15px", md: "0px" } }}
                  fontSize="large"
                />
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">
                The quality of the downloaded video depends on the original
                source's quality and the selected format and resolution during
                the download process. Our tool allows you to choose from
                available resolutions to download the best quality possible.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Container>
      </Box>
    </main>
  );
};

export default AboutPage;
