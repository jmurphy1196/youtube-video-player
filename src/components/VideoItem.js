import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import "../video.css";

function VideoItem({ video, onVideoSelect }) {
  const [elevation, setelevation] = useState(0);
  return (
    <Grid item xs={12}>
      <Paper
        className="video-items"
        onMouseEnter={() => setelevation(8)}
        onMouseLeave={() => setelevation(0)}
        elevation={elevation}
        style={{
          display: "flex",

          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => onVideoSelect(video)}
      >
        <img
          style={{ marginRight: "20px" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
