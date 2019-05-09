
import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVideoSelected})=>{

    const videoList = videos.map((video)=>{

        return <VideoItem key={video.id.videoId } video={video} onVideoSelected={onVideoSelected}/>
    });
    return (
        <div className="video-list ui list divided ">
            {videoList}
        </div>);
};

export default VideoList;