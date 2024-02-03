import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

export const metadata = {
  title: "AllDownload4u",
  description:
    "Download Youtube Videos in all formats. Conatct us if you have any query regarding our alldownload4u site, please let us know.",
};

const Page = () => {
  const ownerData = [
    {
      name: "Muhammad Usman",
      image: "/usman.jpg",
      website: "https://usman-portfolio-app.netlify.app/",
      github: "https://github.com/Usman1361",
      linkedin: "https://www.linkedin.com/in/muhammad-usman-aa7023230/",
    },
    {
      name: "Muhammad Haroon",
      image: "/haroon.jpg",
      website: "https://codexharoon.com",
      github: "https://github.com/codexharoon",
      linkedin: "https://www.linkedin.com/in/codexharoon/",
    },
  ];

  return (
    <main>
      <Box mb={10} sx={{ marginTop: 4 }}>
        <Container>
          <Typography variant="h4" sx={{ fontFamily: "poppins" }}>
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            If you have any questions or suggestions about our tool, please feel
            free to contact us. We would love to hear from you!
          </Typography>
          <Grid container spacing={2}>
            {ownerData.map((owner, index) => (
              <Grid item xs={12} sm={6} key={index + owner}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "2px solid transparent",

                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.3s ease-in-out",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Avatar
                    sx={{ mt: 2, width: 120, height: 120, mb: 1 }}
                    src={owner.image}
                    alt={owner.name}
                  />
                  <Typography variant="h6">{owner.name}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: 1,
                    }}
                  >
                    <Button
                      color="primary"
                      target="_blank"
                      href={owner.website}
                    >
                      <LanguageIcon />
                    </Button>
                    <IconButton
                      color="primary"
                      href={owner.github}
                      target="_blank"
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton
                      color="primary"
                      href={owner.linkedin}
                      target="_blank"
                    >
                      <LinkedInIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
};

export default Page;
