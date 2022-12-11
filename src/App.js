import './App.css'
import Signupnew from './Components/Signupnew'
import Account from './Components/Intro';
import {useState} from 'react'
import Storage12 from './Components/Storage';
import Loadingpage from './Components/Loading';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {

  const darkTheme = createTheme({
    typography: {
      fontFamily: 'Helvetica Neue',
    },
    palette: {
      mode: 'light',
    },
  });
  const [data, setData] = useState({})
  const [loading, setLoading]= useState(true)
  React.useEffect(() => {
   fetch('https://script.google.com/macros/s/AKfycby0EIRMrH9z5lshswYPyWp3GJmdpESDrKwZQqqeIOHSkrls2NslERW9vN8FPmmvf5Qq/exec',
    {
      redirect: "follow",
      method: "GET",
    }
    )
    .then(response => response.json())
    .then((result) => {setData(result)
      setLoading(false)}
      ).catch((error)=>console.log(error))
  },[setData])
  const [page, setPage] = useState(0);
  console.log(data)

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Matric: "",
    Tele: "",
    Contact: "",
    Project_Description: "",
    Start: "",
    End: "",
    Storage:""
  });

  console.log(formData)
  const ComponentList = [
    <Account 
      formData={formData}
      setFormData={setFormData}
      page={page} 
      setPage={setPage}
    />,
    <Signupnew 
      formData={formData}
      setFormData={setFormData}
      page={page} 
      setPage={setPage}
    />
    ,
    <Storage12 
      data={data}
      formData={formData}
      setFormData={setFormData}
      page={page} 
      setPage={setPage}
    />
  ];
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">{
      loading?(
        <Loadingpage/>
      ):
      
      <div className='container'> 
      <div className='Form'>
      <div>{ComponentList[page]}</div>
      </div>
      </div>
    }
    </div>
    </ThemeProvider>
  );
}

export default App