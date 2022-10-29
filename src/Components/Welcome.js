import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

import Parser from '../test'

let theme = createTheme();
theme = responsiveFontSizes(theme)

export default function SignInSide() {

    const user = Parser(1).user
    let Storage = Parser(1).Storage
    Storage = Object.keys(Storage)
    
  const [store, setStore] = React.useState('');

  const handleChange = (event) => {
    setStore(event.target.value);
  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }} >
        <CssBaseline />
        <Grid
        item
        alignItem={'center'}
        xs={false}
        sm={6}
        md={5}
        sx={{
            backgroundColor: 'white',
            backgroundSize: 'cover',
        }}
        >
            <Box  sx={{
              mt: "35%",
              mx: 4,
              alignContent:'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'baseline'
              }}>
            <Typography component="h1" variant="h1" fontWeight={500}>Welcome</Typography>
            <Typography component="h1" variant="h2">{user}</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={7} component={Paper} elevation={6}>
          <Box
            sx={{
              my: "20%",
              mx: "10%",
              minWidth: '80%',
              display: 'inline-flex',
              flexDirection: 'row',
            }}
          >
            <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Available Storage</InputLabel>
  <Select
    labelId="select-label"
    id="select"
    value={store}
    label="Choose your storage"
    onChange={handleChange}
  >
    {Storage.map((name, index)=>
            <MenuItem value={name}>{name}</MenuItem>)}
  </Select>
</FormControl>
      </Box>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}