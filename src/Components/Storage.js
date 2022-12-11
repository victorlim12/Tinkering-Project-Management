import * as React from 'react';
import Cinema from './Display';
import {Collapse} from '@mui/material';
// import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import { clsx } from 'clsx';
import './Storage.css'
import img1 from '../Images/test.jpg'

//mock data
// import Parser from '../test';

export default function Storage12(props){
//should add another layer 
//supposedly is read from json (obtain from fetch)  
const test={"available":["C1","C3","C5","C6","C7","C8"],"notavailable":["C2","C4"]}

//state for seat selection
const [selectedStore, setSelectedStore] = React.useState([])

//collapsible images
const [open, setOpen] = React.useState(true);
const handleClick = () => {
  setOpen(!open);
};


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
  test={test}
  selectedStore={selectedStore}
  onSelectedStoreChange={selectedStore => setSelectedStore(selectedStore)}
/>

</div>

)
}