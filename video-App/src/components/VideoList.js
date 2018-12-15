import React from 'react';
import VideoItem from './VideoItem';




const VideoList = ({videos, onItemClick}) => {
    const listToRender = videos.map( video => <VideoItem key={video.id.videoId} video={video} onItemClick={onItemClick}/> )
    return <div className='ui list'>{listToRender} </div>
}

export default VideoList;