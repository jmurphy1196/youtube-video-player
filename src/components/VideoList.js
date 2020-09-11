import React from "react";
import { Grid } from "@material-ui/core";
import VideoItem from "./VideoItem";
function VideoList({ videos, onVideoSelect }) {
  const listOfVideos = videos.map((vid, ind) => (
    <VideoItem key={ind} video={vid} onVideoSelect={onVideoSelect} />
  ));

  return (
    <Grid container spacing={5}>
      {listOfVideos}
    </Grid>
  );
}

export default VideoList;
