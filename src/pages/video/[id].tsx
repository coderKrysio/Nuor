import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";
import VideoDetail from "@/components/VideoDetail";
import { useRouter } from "next/router";

export default function Video() {
  const router = useRouter();
  const { id } = router.query;
  
  return(
    <Box 
      sx={{ background: '#000' }}
    >
        <Navbar />
        <VideoDetail id={id as string} />
    </Box>
  )
}
