import { Box, Typography } from "@mui/material"
import Videos from "./Videos"
import { fetchFromAPI } from "@/utils/fetchFromAPI"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const SearchFeed = () => {
    const router = useRouter();
    const { searchterm } = router.query;

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchterm}`).then((data) => {setVideos(data.items)})
    }, [searchterm]);   

    return (
        <Box
            p={2}
            sx={{
                overflowY: 'auto',
                height: '90vh',
                flex: 2
            }}
        >
            <Typography 
                variant="h4" 
                fontWeight={"bold"} 
                mb={2}
                sx={{
                    color: 'white'
                }}
            >
                Search Results for: <span style={{
                    color: '#f31503'
                }}>
                    {searchterm}
                </span> videos
            </Typography>
            
            <Videos videos={ videos } />
        </Box>
    )
}

export default SearchFeed