import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

import Parser from '../test'
import Storage12 from './Storage'

let theme = createTheme();
theme = responsiveFontSizes(theme)

export default function SignInSide() {

    const user = Parser(1).user
    let Storage = Parser(1).Storage
    Storage = Object.keys(Storage)


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
      </Box>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}