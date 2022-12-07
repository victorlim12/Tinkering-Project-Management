import React, {useState, useRef} from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@mui/material'

const UserDetails = ({ nextStep, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const formRef = useRef(null)
    const scriptUrl = "https://script.google.com/macros/s/AKfycbx9wXhtdcrXYG2A4zFuuFQ67mT_6YAdqM61n7akqPzaH67Bo9geGjRrl9smmOhxrjjMrw/exec"
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(formRef.current),

    }).then(res => {
            console.log("SUCCESSFULLY SUBMITTED")
            setLoading(false)
        })
        .catch(err => console.log(err))
    }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography  component="h1" variant="h5">
          Garage Storage Space Booking
        </Typography>
        <br />
        <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
          <Grid container spacing={2}>
              {/* Name */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Name"
                  label="Name"
                  onChange={handleChange('name')}
                  defaultValue={values.name}
                  // variant="outlined"
                  autoComplete="name"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <br />
              {/* Email */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Email Address"
                  label="Email Address"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  // variant="outlined"
                  autoComplete="email"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <br />
              {/* Matric Number  */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Matric Number"
                  label="Matric Number"
                  onChange={handleChange('matric')}
                  defaultValue={values.matric}
                  // variant="outlined"
                  autoComplete="matric"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <br />
              {/* Phone Number */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Phone Number"
                  label="Phone Number"
                  onChange={handleChange('contact')}
                  defaultValue={values.contact}
                  // variant="outlined"
                  autoComplete="contact"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <br />
              {/* Telegram */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Telegram"
                  label="Telegram"
                  onChange={handleChange('tele')}
                  defaultValue={values.tele}
                  // variant="outlined"
                  autoComplete="tele"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <br />
              {/* Project Description */}
              <Grid item xs={12}>
                <TextField 
                  required
                  //placeholder="Project Description"
                  label="Project Description"
                  onChange={handleChange('project')}
                  defaultValue={values.project}
                  // variant="outlined"
                  autoComplete="project"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
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
                  onChange={handleChange('start')}
                  defaultValue={values.start}
                  // variant="outlined"
                  autoComplete="start"
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
                  onChange={handleChange('end')}
                  defaultValue={values.end}
                  // variant="outlined"
                  autoComplete="end"
                  size="small"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
          </Grid>
          <br />
          <Button 
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default UserDetails