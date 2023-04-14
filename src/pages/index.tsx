import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box 
      sx={{ background: '#000' }}
      >
        <Navbar />
        <Feed />
      </Box>
    </>
  )
}
