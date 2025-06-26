import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box } from "@mui/material";
export default function RightSectionIconGroup() {
  return (
    <Box
      sx={{
        ml: "auto",
        display: "flex",
        height: "80%",
          width: {
              xs: "100%", // dla małych ekranów
              sm: "90%",  // dla średnich ekranów
              md: "85%",  // dla większych ekranów
              lg: "80%",  // dla dużych ekranów
          },
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <FacebookIcon sx={{ fontSize: "2em" }} />
      <InstagramIcon sx={{ fontSize: "2em" }} />
      <YouTubeIcon sx={{ fontSize: "2em" }} />
      <TwitterIcon sx={{ fontSize: "2em" }} />
    </Box>
  );
}
