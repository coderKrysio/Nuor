import { Box, Typography } from "@mui/material"
import Videos from "./Videos"
import { fetchFromAPI } from "@/utils/fetchFromAPI"
import { useEffect, useState } from "react"

const SearchFeed = ({searchterm}:{searchterm: string}) => {   

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchterm}`).then((data) => {setVideos(data.items)})
    }, []);   


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