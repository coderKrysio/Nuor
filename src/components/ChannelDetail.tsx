import { fetchFromAPI } from "@/utils/fetchFromAPI";
import { Box } from "@mui/material";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

export default function ChannelDetail() {
    const [channelDetail, setChannelDetail] = useState(null)
    const [videos, setVideos] = useState([])

    const router = useRouter();
    const { id } = router.query

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data) => setChannelDetail(data?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data) => setVideos(data?.items))
    }, [id])
    return(
        <Box
            minHeight={"95vh"}
        >
            <Box>
                <div
                    style={{
                        background: "linear-gradient(90deg, rgba(76,37,218,1) 0%, rgba(86,9,121,1) 58%, rgba(129,4,30,1) 100%)",
                        zIndex: 10,
                        height: '300px'
                    }}
                />
                <ChannelCard 
                    channelDetail={channelDetail}
                    marginTop="-110px"
                />
            </Box>
            <Box
                display={"flex"}
                p={"2"}
            >
                <Box
                    sx={{
                        mr: { sm: '100px' }
                    }}
                />
                <Videos videos={videos} />
            </Box>
        </Box>
    )
}
