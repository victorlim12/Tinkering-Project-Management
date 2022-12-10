import './App.css'
import Storagenew from './Components/Storagenew';
import Signupnew from './Components/Signupnew'
import {useState} from 'react'

function Appnew() {
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Matric: "",
    Tele: "",
    Contact: "",
    Project_Description: "",
    Start: "",
    End: ""
  });

  const ComponentList = [
    <Signupnew 
      formData={formData}
      setFormData={setFormData}
      page={page} 
      setPage={setPage}
    />,
    <Storagenew 
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