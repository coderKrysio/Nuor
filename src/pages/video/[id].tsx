import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";
import VideoDetail from "@/components/VideoDetail";

export default function Video() {
    return(
    <Box 
      sx={{ background: '#000' }}
    >
        <Navbar />
        <VideoDetail />
    </Box>
    )
}
