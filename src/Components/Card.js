import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BasicCard(props) {
  return (
    <Card sx={{  mx:'3%' }}>
      <CardActionArea sx={{ backgroundColor:'yellow'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.StorageName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
