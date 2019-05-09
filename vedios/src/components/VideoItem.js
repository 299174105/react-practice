import './VideoItem.css';
import React from 'react';

const VideoItem =({video,onVideoSelected})=>{

    return (
        <div onClick={() => onVideoSelected(video)} className="video-item item">
            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
            {video.snippet.title}
            </div>
        </div>);
};

export default VideoItem;