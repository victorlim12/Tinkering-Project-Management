import * as React from 'react';
import Cinema from './Display';
import './Storage.css'
import img1 from '../Images/test.jpg';
import SimpleAccordion from './Accordion';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import {Button, Typography} from '@mui/material';

//mock data
// import Parser from '../test';

export default function Storage12({page1, setPage1, formData, setFormData, data}){

//state for seat selection
const [selectedStore, setSelectedStore] = React.useState([])


return(
  <div className='containers'>
    <WorkOutlineIcon sx={{fontSize: 60}}/>
    <Typography  component="h1" variant="h3" fontWeight={600}>
          Pick a Space You Like!
        </Typography>
        <Typography  component="h1" variant="h6" fontWeight={400} fontSize={20}>
          Grab one when it's still available!
        </Typography>
        <br/>
    <SimpleAccordion text={'Display'}>
      <div>
      <img src={img1} alt='test' style={{width: '100%',
      height: 'auto'}}/>
      </div>
    </SimpleAccordion>

  <Cinema
  test={data}
  selectedStore={selectedStore}
  onSelectedStoreChange={selectedStore => setSelectedStore(selectedStore)}
  formData={formData}
  setFormData={setFormData}
  page={page1} 
  setPage={setPage1}
/>
<Button 
            onClick={ () => {setPage1(page1+1);} }
            fullWidth
            variant="contained"
            color="primary">
            Next
          </Button>
</div>

)
}