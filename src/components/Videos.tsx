import { Box, Stack } from "@mui/material"
import VideoCard from "./VideoCard"
import ChannelCard from "./ChannelCard"

const Videos = ({videos}:any) => {
    return(
        <Stack
            direction={'row'}
            justifyContent={'start'}
            flexWrap={'wrap'}
            gap={2}
        >
            {videos.map((item: any, idx: any) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos