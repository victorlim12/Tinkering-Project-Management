import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { clsx } from 'clsx';
import './Storage.css'

//mock data
import Parser from '../test';

export default function Storage12(props){
//sort first then find the last one

let Storage = Parser(1).Storage
let Storage2 = Object.keys(Storage)
let Max = []

console.log(Storage2)

const [store, setStore] = React.useState(Storage2[1]);
  console.log(store)

  const handleChange = (event) => {
    setStore(event.target.value);
  };

Max = Object.keys(Storage[store])
//Take Max
let lastindex = Max.pop()
let n = lastindex[1]

//Store box
const stores = Array.from({ length: 1 * n }, (_, i) => i)
console.log(stores)

return(
    <div className='Storage'>
    <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Available Storage</InputLabel>
    <Select
      labelId="select-label"
      id="select"
      value={store}
      label="Choose your storage"
      onChange={handleChange}
    >
      {Storage2.map((name, index)=>
              <MenuItem value={name}>{name}</MenuItem>)}
    </Select>
    </FormControl>
    <div className ='stores'>
    {stores.map(number => {
        return(
    //   const isSelected = selectedSeats.includes(number)
    //   const isOccupied = movie.occupied.includes(number)
        <span
          tabIndex="0"
          key={number}
          className="store"
        //   className={clsx(
        //     'seat',
        //     isSelected && 'selected',
        //     isOccupied && 'occupied',
        //   )}
        //   onClick={isOccupied ? null : () => handleSelectedState(seat)}
        //   onKeyPress={
        //     isOccupied
        //       ? null
        //       : e => {
        //           if (e.key === 'Enter') {
        //             handleSelectedState(seat)
        //           }
        //         }
        // }
        />
    )})}</div>
  </div>

)
}