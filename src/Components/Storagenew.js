import React, {useState, useRef, useEffect, Fragment} from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Tabletop from "tabletop";
//import { Container, Typography, Grid, TextField, Button } from '@mui/material'

const Storagenew = ({page, setPage, formData, setFormData}) => {
  
  let headers = new Headers();
  headers.append('Content-type', 'application/json');
  headers.append('Accept', 'application/json');
  headers.append('Origin', 'http://localhost:3000');

  /*const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "1Box-3yOt-V_zFAePg0PaQbztIB-iPlejDH8iQEsP8co",
      simpleSheet: true
    })
    .then((data) => setData(data))
    .catch((err) => console.warn(err));
  }, []);*/

  //const formRef = useRef(null)
  const form = document.forms['google-sheet']
  const scriptUrl = "https://script.google.com/macros/s/AKfycby0EIRMrH9z5lshswYPyWp3GJmdpESDrKwZQqqeIOHSkrls2NslERW9vN8FPmmvf5Qq/exec"
  const [loading, setLoading] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData.Name, formData.Email, formData.Matric)
        //setLoading(true)

        fetch(scriptUrl, {
        method: 'POST', 
        body: new FormData(form),
        //credentials: 'include',
        headers: headers

    }).then(res => res.json())
            //console.log("SUCCESSFULLY SUBMITTED")
      .then(json => console.log(json))  
            //setLoading(false)
      .catch(err => console.log(err))
    }

  return (
    <div>
      <ul>
      {/*{data.map((item, i) => (*/}
        <Fragment>
          <li>name</li>
          <li>email</li>
          <li>matric</li>
          <br />
        </Fragment>
      ))}
      <button onClick={() => {setPage(page-1);}}>
        Previous
      </button>
      <button onClick={handleSubmit}>
        {/*
          () => {alert("Submission successful!");}
          handleSubmit 
        */}
        Submit
      </button>
    </ul>
    </div>
  );
};

export default Storagenew