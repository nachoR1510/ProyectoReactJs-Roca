import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./itemListContainer.css";

const itemListContainer = (props) => {
  return (
    <Card sx={{ maxWidth: 750 }} className="tarjeta">
      <CardActionArea>
        <CardMedia component="img" height="300" image={props.img} alt="juego" />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {props.titulo}
          </Typography>
          <Typography variant="h4" color="text.secondary">
            {props.precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default itemListContainer;
