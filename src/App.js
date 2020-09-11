import React, { Component } from "react";
import { Col, Grid } from "@material-ui/core";

import youtube from "./api/youtube";
import { SearchBar, VideoDetail, VideoList } from "./components";
import "./video.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }
  handleSubmit = async (searchTerm) => {
    console.log(searchTerm);
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyAo6WG18iaRiwcbgjfHNWS77ayALAmCcBE",
        q: searchTerm,
      },
    });
    this.setState(() => {
      return {
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      };
    });
  };

  componentDidMount() {
    this.handleSubmit("javascript tutorials");
  }

  onVideoSelect = (video) => {
    this.setState(() => {
      return {
        selectedVideo: video,
      };
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid container spacing={10} justify="center">
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                id="logo"
                src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
              />
            </Grid>
            <Grid item xs={12} style={{ bottom: "8rem", position: "relative" }}>
              {/* searchbar */}
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={12} md={8} className="video-detail">
              {/* video details */}
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={12} md={4} className="video-list">
              {/* video list */}
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
