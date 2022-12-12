import './App.css'
import Signupnew from './Components/Signupnew'
import Account from './Components/Intro';
import {useState} from 'react'
import Storage12 from './Components/Storage';
import Loadingpage from './Components/Loading';
import React from 'react';
import CardInterface from './Components/Choice';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Free from './Components/Free';
import { Lastpage } from './Components/Closing';

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
   fetch('https://script.google.com/macros/s/AKfycbyoKEJiBWXXf1xkijyxQFQRMTlKcWpM6yzs3NPbvMSOWF2Eh-Latt3gnsNgtWg4LQ/exec',
    {
      redirect: "follow",
      method: "GET",
    }
    )
    .then(response => response.json())
    .then((result) => {setData(result)
      setLoading(false)}
      ).catch((error)=>console.log(error))
  },[])
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
    Storage:"",
    Request:"store"
  });

  console.log(formData)
  const ComponentList = [
    <Account 
      formData={formData}
      setFormData={setFormData}
      page={page} 
      setPage={setPage}
    />,
    <CardInterface
    formData={formData}
    setFormData={setFormData}
    page={page} 
    setPage={setPage}
    data={data}
  />,
  <Lastpage
  formData={formData}
  setFormData={setFormData}
  page={page} 
  setPage={setPage}
  data={data}
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