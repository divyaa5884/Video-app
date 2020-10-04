import React, { Component } from 'react';
import VideoItem from './VideoItem';

class VideoList extends Component {
    showVideoLists = (() => {
    	const videos = this.props.videos;
    	const videoItems = videos.map((videoEle) => {
    		return <VideoItem key={videoEle.id.videoId} video = {videoEle} onVideoSelect = {this.props.onVideoSelect}/>
    	})
    	return videoItems;
    })
    render() {
        return (
        	<div className = "ui relaxed divided list video-list" >{this.showVideoLists()}</div>
        );
    }
}

export default VideoList;
