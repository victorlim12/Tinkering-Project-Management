import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@mui/material'
import StorageIcon from '@mui/icons-material/Storage';


const Signupnew = ({page, setPage, formData, setFormData}) => {
  const handleClick2 = ()=>{
    fetch('https://script.google.com/macros/s/AKfycbzI_UfM50lhNdixJvIgKm48o0ckja4luLcZHMhOSYhUkVJXg2ZKyuOU33DigFJy88fh/exec',
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        }
      }
      )
      .then(response => {response.json();
        setPage(page+1)})
      .then((result) => console.log(result)).catch((error)=>console.log(error))
  }
  return (
    <Container component="main" >
      <div>
        <StorageIcon sx={{fontSize: 50}}/>
        <Typography  component="h1" variant="h4" fontWeight={600}>
          You're good to go!
        </Typography>
        <Typography  component="h1" variant="h6" fontWeight={400} fontSize={16}>
          Fill in Your Project's Particulars
        </Typography>
        <form>
        <br/>
          <Grid container rowSpacing={2} maxWidth={'sm'}>
              {/* Name */}
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
              {/* Matric Number  */}
            
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
          <br/>
          <Button 
           onClick={handleClick2}
            variant="contained"
            color="primary"
            size='large'
          >Submit</Button>
        </form>
      </div>
    </Container>
  );
};

export default Signupnew