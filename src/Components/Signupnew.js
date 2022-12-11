import React, {useState, useRef} from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@mui/material'

const Signupnew = ({page, setPage, formData, setFormData}) => {

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography  component="h1" variant="h4" fontWeight={600}>
          Garage Storage Space Booking
        </Typography>
        <br />
        <form>
          <Grid container spacing={2}>
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
              <br />
              {/* Email */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Email Address"
                  label="Email Address"
                  value={formData.Email}
                  onChange={(e) => setFormData({ ...formData, Email: e.target.value })}                 
                  size="small"
                  fullWidth
                />
              </Grid>
              <br />
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
              <br />
              {/* Telegram */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Telegram"
                  label="Telegram"
                  value={formData.Tele}
                  onChange={(e) => setFormData({ ...formData, Tele: e.target.value })}
                  size="small"
                  fullWidth
                />
              </Grid>
              <br />
              {/* Phone */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Phone Number"
                  label="Phone Number"
                  value={formData.Contact}
                  onChange={(e) => setFormData({ ...formData, Contact: e.target.value })}
                  size="small"
                  fullWidth
                />
              </Grid>
              <br />
              {/* Project Description */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Project Description"
                  label="Project Description"
                  value={formData.Project_Description}
                  onChange={(e) => setFormData({ ...formData, Project_Description: e.target.value })}
                  size="small"
                  fullWidth
                />
              </Grid>
              <br />
              {/* Start Date */}
              <Grid item xs={12}>
                <TextField 
                  required
                  type="date"
                  //placeholder="Start date"
                  label="Start date"
                  value={formData.Start}
                  onChange={(e) => setFormData({ ...formData, Start: e.target.value })}
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <br />
              {/* End date */}
              <Grid item xs={12}>
                <TextField 
                  required
                  type = "date"
                  //placeholder="End date"
                  label="End date"
                  value={formData.End}
                  onChange={(e) => setFormData({ ...formData, End: e.target.value })}
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
          </Grid>
          <br />
          <Button 
            onClick={ () => {setPage(page+1);} }
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Signupnew