import { demoChannelTitle, demoChannelUrl, demoProfilePicture, demoVideoTitle, demoVideoUrl  } from "@/utils/constants"
import { CheckCircle } from "@mui/icons-material"
import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import Link from "next/link"

const VideoCard = ({ video : { id: { videoId }, snippet }}: any) => {

    return (
        <Card
            sx={{
                width: { xs: '100%', sm: '358px', md: "320px" },
                boxShadow: 'none',
                borderRadius: 0
            }}
        >
            <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={snippet?.thumbnails?.high?.url}
                    sx={{
                        width: 358,
                        height: 180
                    }}
                />
            </Link>

            <CardContent
                sx={{
                    backgroundColor: '#1e1e1e',
                    height: '160px'
                }}
            >
                <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography
                        variant="subtitle1"
                        fontWeight={"bold"}
                        color={'#fff'}
                    >
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>

                <Link href={snippet.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography
                        variant="subtitle2"
                        fontWeight={"bold"}
                        color={'gray'}
                    >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle
                            sx={{
                                fontSize: 12,
                                color: 'gray',
                                ml: '5px'
                            }}
                        />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard