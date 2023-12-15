import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const itemListContainer = ({ game }) => {
  const { img, nombre, precio, id } = game;
  return (
    <Link to={`/item/${id}`} style={{ textDecoration: "none" }}>
      <Card
        style={{
          color: "#f2e9e4",
          boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)",
        }}
        sx={{ maxWidth: 500, minWidth: 500 }}
        id="cardStyle"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={img}
            alt="juego"
            style={{ borderRadius: "4px" }}
          />
          <CardContent>
            <Typography
              component="div"
              variant="h4"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: "400",
                fontSize: "2.5rem",
              }}
            >
              {nombre}
            </Typography>
            <Typography
              variant="h3"
              style={{
                fontFamily: "Lato, sans-serif",
                fontWeight: "400",
                fontSize: "3rem",
              }}
            >
              $ {precio}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default itemListContainer;
