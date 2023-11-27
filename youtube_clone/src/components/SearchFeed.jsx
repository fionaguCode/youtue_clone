import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import {  Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

export const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  },[searchTerm]);
  
  
  return (
    <Box p={2} sx={{ padding:3,overflowY: "auto", height: "90vh", flex: 2 }}>
       <Typography variant="h4" fontWeight="bold" mb={4} sx={{ color: "white" }}>
            Search Results for: <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
       </Typography>
       <Videos videos={videos} />
    </Box>
  )
}
