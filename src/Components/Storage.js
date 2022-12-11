import * as React from 'react';
import Cinema from './Display';
import {Collapse} from '@mui/material';
// import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { clsx } from 'clsx';
import './Storage.css'
import img1 from '../Images/test.jpg'

//mock data
// import Parser from '../test';

export default function Storage12({page, setPage, formData, setFormData, data}){

//state for seat selection
const [selectedStore, setSelectedStore] = React.useState([])
//collapsible images
const [open, setOpen] = React.useState(true);

const handleClick = () => {
  setOpen(!open);
};

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
  <div>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <h1 className='heading'>Storage Booking</h1>
    <button className='button-style' onClick={handleClick} >Click to view images
    <Collapse in={open} timeout="auto" unmountOnExit>
      <img src={img1} width='700em' alt='test' className='dropdown-style'/>
      </Collapse>
      </button>
  <Cinema
  test={data}
  selectedStore={selectedStore}
  onSelectedStoreChange={selectedStore => setSelectedStore(selectedStore)}
  formData={formData}
  setFormData={setFormData}
  page={page} 
  setPage={setPage}
/>
<button onClick={handleClick2}>Submit</button>

</div>

)
}