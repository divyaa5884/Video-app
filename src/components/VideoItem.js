import React, { Component } from 'react';
import './VideoItem.css';

class VideoItem extends Component {

    // getVideoDetail = (() => {
    // 	const x = this.props.video;
    // 	this.props.onVideoSelect(x);
    // 	return ;
    // })

    render() {
    	const {video} = this.props;
    	console.log(video);
        return (
            <div className = "video-item item" onClick = {() => this.props.onVideoSelect(video)} >
            	<div className="content">
            		<img src = {video.snippet.thumbnails.default.url} alt = {video.snippet.description} />
            		<div className="header">
            			{video.snippet.title}
            		</div>
            	</div>
            </div>
        );
    }
}

export default VideoItem;
