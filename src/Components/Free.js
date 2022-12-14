import React, {useEffect} from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem, Button, Typography } from '@mui/material';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';

const Free = ({page, setPage, formData, setFormData}) => {
	const reader = require('g-sheets-api');
	const options = {
  		apiKey: 'AIzaSyAgEnuNzdEIr7r-xRjwk1KlcN-teKC3OPY',
 			sheetId: '1Box-3yOt-V_zFAePg0PaQbztIB-iPlejDH8iQEsP8co',
  		sheetNumber: 1,
  		sheetName: 'Sheet1',
  		returnAllResults: false
	}

	const [loading, setLoading]= React.useState(true)
    const [data, setData] = React.useState([])

	const handleClick3 = (e)=>{
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
		setPage(page+1)}
	
	)
    .then((result) => console.log(result)).catch((error)=>console.log(error))
}

	let options1 = [];

	useEffect(() => {
   	reader(options, (results) => {
		//console.log(results[0].Availability);
		//const options1 = [];
		for (let i = 0; i <= 7; i++){
			if (formData.Matric == results[i].Matric && results[i].Availability === 'NOT AVAILABLE'){
				options1.push(results[i].Storage);
			}
			setData(options1)
		}
	}
	)
    .then(response => {response.json();})
    //.then((result) => setData(result))
    .catch((error)=>console.log(error))
  },[setData])

  console.log (data)
  console.log(formData)

		return(
			<div>
				<RemoveFromQueueIcon sx={{fontSize: 60}}/>
				<Typography  component="h1" variant="h4" fontWeight={600}>
          Checkout!
        </Typography>
        <Typography  component="h1" variant="h6" fontSize={15}>
          Checkout after your project is done!
        </Typography>
		<br/>
				<FormControl fullWidth> 
    <InputLabel id="demo-simple-select-label">Available Storage</InputLabel>
    <Select
      labelId="select-label"
      id="select"
      value={formData.Storage}
    onChange={(e) => setFormData({ ...formData, Storage: e.target.value, Request:'delete' })}
    >
      {data.map((name, index)=>
              <MenuItem value={name}>{name}</MenuItem>)}
    </Select>
	<br/>
    </FormControl>
				<Button variant='contained'
					onClick={handleClick3}>
					Delete
				</Button>
			</div>

		)

}
export default Free

