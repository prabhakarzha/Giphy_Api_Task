import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const GiffyCard = ({ data }) => {
  return (
    <div className="image-card">
      <Card sx={{ maxWidth: 345, height: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            img
            src={data?.images?.original?.webp}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default GiffyCard;
