import './App.css'
import Storagenew from './Components/Storagenew';
import Signupnew from './Components/Signupnew'
import {useState} from 'react'
import Storage12 from './Components/Storage';
import React from 'react';

function Appnew() {
  const [data, setData] = useState({})
  React.useEffect(() => {
   fetch('https://script.google.com/macros/s/AKfycby0EIRMrH9z5lshswYPyWp3GJmdpESDrKwZQqqeIOHSkrls2NslERW9vN8FPmmvf5Qq/exec',
    {
      redirect: "follow",
      method: "GET",
    }
    )
    .then(response => response.json())
    .then((result) => setData(result)).catch((error)=>console.log(error))
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
    Storage:""
  });

  console.log(formData)
  const ComponentList = [
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
    <div className="App">
      <div>{ComponentList[page]}</div>
    </div>
  );
}

export default Appnew