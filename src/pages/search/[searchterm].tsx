import Navbar from "@/components/Navbar";
import SearchFeed from "@/components/SearchFeed";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

export default function Search() {
    const router = useRouter();
    const { searchterm } = router.query;
    
    return(
    <Box 
      sx={{ background: '#000' }}
    >
        <Navbar />
        {searchterm && <SearchFeed searchterm={searchterm as string}/>}
    </Box>
    )
}
