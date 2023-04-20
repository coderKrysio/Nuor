import { Box, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { fetchFromAPI } from "@/utils/fetchFromAPI";
import dynamic from 'next/dynamic'
import Link from "next/link";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import Loader from "./Loader";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoDetail = ({id}: {id: string}) => {
    const [videoDetail, setVideoDetail] = useState(null)
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))        
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
    },[])

    console.log(videoDetail)
    const title = videoDetail?.snippet?.title

    // if(!videoDetail?.snippet) return <Loader />;
    
    //const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

    return (
        <Box 
            minHeight={"95vh"}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
            >
                <Box
                    flex={1}
                >
                    <Box
                        sx={{
                            width: '100%',
                            position: 'sticky',
                            top: '86px'
                        }}
                    >
                        <ReactPlayer
                            url={`https://youtube.com/watch?v=${id}`} 
                            className="react-player"
                            playing
                        />

                        <Typography
                            color={"#fff"}
                            variant={"h5"}
                            fontWeight={"bold"}
                            py={1}
                            px={2}
                        >
                            {videoDetail?.snippet?.title}
                        </Typography>

                        <Stack
                             direction={"row"}
                             justifyContent={"space-between"}
                             sx={{
                                color: "#fff",
                             }}
                             py={1}
                             px={2}
                        >
                            <Link href={`/channel/${videoDetail?.snippet.channelId}`}>
                                <Typography
                                    color={"#fff"}
                                    variant={"subtitle1"}
                                >
                                    {videoDetail?.snippet?.channelTitle}
                                    <CheckCircle
                                        sx={{ 
                                            fontSize: '12px', 
                                            color: 'gray',
                                            ml: '5px'
                                        }}
                                    />
                                </Typography>
                            </Link>

                            <Stack
                                direction="row" 
                                gap="20px" 
                                alignItems="center"
                            >
                                <Typography 
                                    variant="body1" 
                                    color={"#fff"}
                                    sx={{ 
                                        opacity: 0.7 
                                    }}
                                >
                                    {parseInt(videoDetail?.statistics.viewCount).toLocaleString()} views
                                </Typography>

                                <Typography 
                                    variant="body1" 
                                    color={"#fff"}
                                    sx={{ 
                                        opacity: 0.7 
                                    }}
                                >
                                    {parseInt(videoDetail?.statistics.likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                <Box
                    px={2} 
                    py={{ md: 1, xs: 5 }} 
                    justifyContent="center" 
                    alignItems="center" 
                >
                    <Videos 
                        videos={videos} 
                        direction="column" 
                    />
                </Box>
            </Stack>
        </Box>
    )
}

export default VideoDetail