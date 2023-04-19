// import { Box, Stack, Typography } from "@mui/material"
// import { useRouter } from "next/router"
// import { useEffect, useState } from "react";
// import { fetchFromAPI } from "@/utils/fetchFromAPI";
// import dynamic from 'next/dynamic'
// import Link from "next/link";
// import { CheckCircle } from "@mui/icons-material";

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

// const VideoDetail = () => {
//     const [videoDetail, setVideoDetail] = useState(null)

//     const router = useRouter();
//     const { id } = router.query;

//     useEffect(() => {
//         fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))
//     },[id])

//     if(!videoDetail.snippet) return 'Loading...'
//     const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail

//     return (
//         <Box 
//             minHeight={"95vh"}
//         >
//             <Stack
//                 direction={{ xs: 'column', md: 'row' }}
//             >
//                 <Box
//                     flex={1}
//                 >
//                     <Box
//                         sx={{
//                             width: '100%',
//                             position: 'sticky',
//                             top: '86px'
//                         }}
//                     >
//                         <ReactPlayer
//                             url={`https://youtube.com/watch?v=${id}`} 
//                             className="react-player"
//                         />

//                         <Typography
//                             color={"#fff"}
//                             variant="h5"
//                             fontWeight={"bold"}
//                             p={2}
//                         >
//                             {title}
//                         </Typography>

//                         <Stack
//                              direction={"row"}
//                              justifyContent={"space-between"}
//                              sx={{
//                                 color: "#fff",
//                              }}
//                              py={1}
//                              px={2}
//                         >
//                             <Link href={`/channel/${channelId}`}>
//                                 <Typography
//                                     color={"#fff"}
//                                     variant={{ sm: 'subtitle1', md: 'h6' }}
//                                 >
//                                     {channelTitle}
//                                     <CheckCircle sx={{ fontSize: '12px', color: 'gray' }}
//                                 </Typography>
//                             </Link>
//                         </Stack>
//                     </Box>
//                 </Box>
//             </Stack>
//         </Box>
//     )
// }

// export default VideoDetail