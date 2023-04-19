import Navbar from "@/components/Navbar";
import ChannelDetail from "@/components/ChannelDetail";
import { Box } from "@mui/material";

export default function Channel() {
    return(
    <Box 
      sx={{ background: '#000' }}
    >
        <Navbar />
        <ChannelDetail />
    </Box>
    )
}
