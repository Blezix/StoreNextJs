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
        width: "80%",
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
