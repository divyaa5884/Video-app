import React, { Component } from 'react';

class VideoDetail extends Component {
    showDetails = ((video) => {
    	if(video !== null){
    		const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    		return (
				<div className = "ui segment">
					<div className = "ui embed">
						<iframe src = {videoSrc} />
					</div>
					<div className = "ui segment">
						<div className = "ui header">
							{video.snippet.title}
						</div>
						<div className = "ui content">
							{video.snippet.description}
						</div>
					</div>
				</div>
			);
    	} else{
    		return (<div> No video yet selected</div>);
    	}
    })

    render() {
		const {video} = this.props;
        return (
            <div className = "video-player">{this.showDetails(video)}</div>
        );
    }
}

export default VideoDetail;
