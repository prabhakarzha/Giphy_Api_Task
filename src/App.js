import "./App.css";
import React, { useState, useEffect } from "react";
import GiffyCard from "./components/GiffyCard";
import axios from "axios";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios(
        "https://api.giphy.com/v1/gifs/trending?limit=60",
        {
          params: {
            api_key: "dsAmBXxZ1aVCqPuv0ydEVVLlmryPjWYI",
          },
        }
      );
      setImages(results.data.data);
    };
    fetchData();
  }, []);

  console.log(images);
  return (
    <div className="App">
      <h1>Giphy React App</h1>
      <p>Page No:- {page + 1}</p>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          // spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <div className="images-grid">
            {images.slice(page * 12, (page + 1) * 12).map((item, index) => (
              <GiffyCard data={item} key={index} />
            ))}
          </div>
          <div className="button">
            <Button
              onClick={() => setPage(0)}
              variant="contained"
              color="success"
            >
              prev
            </Button>
            <Button
              onClick={() => setPage(1)}
              variant="contained"
              color="success"
            >
              Next
            </Button>
          </div>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
