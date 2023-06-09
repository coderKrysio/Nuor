import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { demoProfilePicture } from "@/utils/constants"
import Link from "next/link"
import { CheckCircle } from "@mui/icons-material"

const ChannelCard = ({channelDetail, marginTop}: any) => {
  return (
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '365px', md: '320px' },
            height: '326px',
            margin: 'auto',
            marginTop: marginTop
        }}
    >
        <Link href={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'center',
                    color: '#fff'
                }}
            >
                <CardMedia 
                    image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                    sx={{
                        borderRadius: '50%',
                        height: '180px',
                        width: '180px',
                        mb: 2,
                        border: '1px solid #e3e3e3'
                    }}
                />

                <Typography variant="h6">
                    {channelDetail?.snippet?.title}
                    <CheckCircle
                        sx={{
                            fontSize: 14,
                            color: 'gray',
                            ml: '5px'
                        }}
                    />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard