import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import axios from 'axios';

class App extends Component {
    state = {
      videos: [],
      selectedVideo: null
    }
    onVideoSelect = ((video) => {
      // console.log("Video selected", video);
      this.setState({selectedVideo: video});
    })
    // calling below method to show some data based on default term
    componentDidMount() {
      this.getSearchTextVal('cats');
    }
    getSearchTextVal = ((val) => {
      // do an api calll to get list of videos
      // GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY] HTTP/1.1
      // add a type parameter to our axios config object to only search for videos and not playlists.
      axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          q: val,
          key: 'AIzaSyD4KuXoBPNewwrTxaxLT4uypYNU8QC5gik'
        }
      }).then((response) => {
        // selectedVideo : assigning first video of search result to show by default in video player 
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
        console.log(response);
      })
    })
    render() {
        return (
          <div className = "ui container">
            <SearchBar onSearchSubmit = {this.getSearchTextVal} />
            <VideoDetail video = {this.state.selectedVideo} />
            <VideoList videos = {this.state.videos} onVideoSelect = {this.onVideoSelect} />
          </div>
        );
    }
}

export default App;
