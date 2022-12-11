import * as React from 'react';
import Cinema from './Display';
import './Storage.css'
import img1 from '../Images/test.jpg';
import SimpleAccordion from './Accordion';
import {Button} from '@mui/material';

//mock data
// import Parser from '../test';

export default function Storage12({page, setPage, formData, setFormData, data}){

//state for seat selection
const [selectedStore, setSelectedStore] = React.useState([])

const handleClick2 = ()=>{
  fetch('https://script.google.com/macros/s/AKfycby0EIRMrH9z5lshswYPyWp3GJmdpESDrKwZQqqeIOHSkrls2NslERW9vN8FPmmvf5Qq/exec',
    {
      redirect: "follow",
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      }
    }
    )
    .then(response => response.json())
    .then((result) => console.log(result)).catch((error)=>console.log(error))
}

return(
  <div className='containers'>
    <h1 className='heading'>Storage Booking</h1>
    <SimpleAccordion text={'Click here to see the Real-Life Display'}>
      <div>
      <img src={img1} alt='test' style={{width: '90%',
      height: 'auto'}}/>
      </div>
    </SimpleAccordion>
    {/* <button className='button-style' onClick={handleClick} >Click to view images */}
    {/* <Collapse in={open} timeout="auto" unmountOnExit>
      <img src={img1} width='700em' alt='test' className='dropdown-style'/>
      </Collapse>
      </button> */}
  <Cinema
  test={data}
  selectedStore={selectedStore}
  onSelectedStoreChange={selectedStore => setSelectedStore(selectedStore)}
  formData={formData}
  setFormData={setFormData}
  page={page} 
  setPage={setPage}
/>
<Button 
           onClick={handleClick2}
            variant="contained"
            color="primary"
            size='large'
          >Submit</Button>
</div>

)
}