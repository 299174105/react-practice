import React from 'react';

const VideoDetail = ({video})=>{

    if (video === null) {
        return <div>Loading</div>;
    }
    const urlStr =`https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="ui embed">
        <iframe  title={video.snippet.title} src={urlStr}>
        </iframe>
            </div>
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
        </div>
    );
};

export default VideoDetail;