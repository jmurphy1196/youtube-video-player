import React from "react";
import { Paper, Typography, CircularProgress, Grid } from "@material-ui/core";

function VideoDetail({ video }) {
  if (!video) {
    return (
      <Grid item style={{ display: "flex", alignItems: "center" }}>
        <CircularProgress size="50%" />
      </Grid>
    );
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(videoSrc);
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="video player"
          src={videoSrc}
          allowFullScreen
        />
      </Paper>
      <Paper elevation={6} style={{ padding: "15px" }}>
        <Typography variant="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle1">
          {video.snippet.channelTitle}
        </Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </React.Fragment>
  );
}

export default VideoDetail;
