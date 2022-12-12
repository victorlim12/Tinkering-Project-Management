import React, {useState, useRef, useEffect} from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Container, Typography, Grid, TextField, Button } from '@mui/material'
import {DropDownListComponent} from '@syncfusion/ej2-react-dropdowns'

const Free = ({page, setPage, formData, setFormData}) => {
	const reader = require('g-sheets-api');
	const clear = require('g-sheets-api');
	const options = {
  		apiKey: 'AIzaSyAgEnuNzdEIr7r-xRjwk1KlcN-teKC3OPY',
 			sheetId: '1Box-3yOt-V_zFAePg0PaQbztIB-iPlejDH8iQEsP8co',
  		sheetNumber: 1,
  		sheetName: 'Sheet1',
  		returnAllResults: false
	}

	const handleClick3 = (e)=>{

  fetch('https://script.google.com/macros/s/AKfycby0EIRMrH9z5lshswYPyWp3GJmdpESDrKwZQqqeIOHSkrls2NslERW9vN8FPmmvf5Qq/exec',
    {
    	"Storage": e.target.value,
    	"Request": "delete",
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

	const options1 = [];

	useEffect(() => {
   	reader(options, (results) => {
		//console.log(results[0].Availability);
		//const options1 = [];
		for (let i = 0; i <= 7; i++){
			if (formData.Matric == results[i].Matric && results[i].Availability == 'NOT AVAILABLE'){
				options1.push(results[i].Storage);
			}
		}
		console.log(options1);
		//console.log(typeof(options1))
	}
	)
    .then(response => response.json())
    //.then((result) => setData(result))
    .catch((error)=>console.log(error))
  },[])
	
		//const len = options1.length;
		//console.log(len);
		/*var dropdown = document.getElementById("selectStorage");
		for (var i = 0; i < len; i++){
			var opt = options1[i];
			var el = document.createElement("option");
			el.textContent = opt;
			el.value = opt;
			dropdown.appendChild(el);
		}*/


		return(
			<div>
				<DropDownListComponent dataSource={options1}></DropDownListComponent>
				<button
					onClick={handleClick3}>
					Delete
				</button>
			</div>

		)

}
export default Free

