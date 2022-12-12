import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@mui/material'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const Account = ({page, setPage, formData, setFormData}) => {

  return (
    <Container component="main" >
      <div>
        <AppRegistrationIcon sx={{ fontSize: 50 }}/>
        <Typography  component="h1" variant="h4" fontWeight={600}>
        Storage Space Booking
        </Typography>
        <Typography  component="h1" variant="h6" fontWeight={400} fontSize={16}>
          You're off to a great start
        </Typography>
        <form>
        <br/>
          <Grid container rowSpacing={2} maxWidth={'sm'}>
              {/* Name */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Name"
                  label="Name"
                  value={formData.Name}
                  onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
                  size="small"
                  fullWidth
                />
              </Grid>
              {/* Matric Number  */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Matric Number"
                  label="Matric Number"
                  value={formData.Matric}
                  onChange={(e) => setFormData({ ...formData, Matric: e.target.value })}
                  size="small"
                  fullWidth
                />
                </Grid>
              </Grid>
          <br/>
          <Button 
            onClick={ () => {setPage(page+1);} }
            fullWidth
            variant="contained"
            color="primary">
            Next
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Account