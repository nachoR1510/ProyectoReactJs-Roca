import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const itemListContainer = ({ char }) => {
  const { img, titulo, precio } = char;
  return (
    <Card sx={{ maxWidth: 500 }} id="cardStyle">
      <CardActionArea>
        <CardMedia component="img" height="300" image={img} alt="juego" />
        <CardContent>
          <Typography component="div" variant="h3">
            {titulo}
          </Typography>
          <Typography color="text.secondary" variant="h3">
            {precio}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default itemListContainer;
