import React from "react"
import '../App.css'
import { Grid, Typography} from "@mui/material"
import Free from "./Free"
import Storage12 from "./Storage"
import Signupnew from "./Signupnew"
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import RemoveFromQueueIcon from '@mui/icons-material/RemoveFromQueue';


export default function CardInterface({page, setPage, formData, setFormData, data}){
    const [choice, setChoice] = React.useState(true)
    const [path, setPath] = React.useState(0)
    const [page1,setPage1] = React.useState(0)
    console.log(choice)
    console.log(path)

    const handleClick = () => {
        setChoice(!choice);
        setPath(1)
      };

      const handleClick2 = () => {
        setChoice(!choice);
        setPath(2)
      };

      const ComponentList2 = [
        <Storage12 
          formData={formData}
          setFormData={setFormData}
          page1={page1} 
          page={page}
          setPage1={setPage1}
          setPage={setPage}
          data={data}
        />,
        <Signupnew
        formData={formData}
        setFormData={setFormData}
        page1={page1}
        page={page}
        setPage1={setPage1}
        setPage={setPage}
        data={data}
      /> ]

return(
    choice?
    <Grid container spacing={5}>
        <Grid container item xs={6}>
        <div className="Form2" onClick={handleClick}> 
        <BookmarkAddIcon sx={{fontSize: 60}}/>
        <Typography  component="h1" variant="h5" fontWeight={600}>
          Booking!
        </Typography>
        <Typography  component="h1" variant="h6" fontSize={15}>
          Grab the available spot for your project!
        </Typography></div>
        </Grid>
        <Grid container item xs={6}>
        <div className="Form2"onClick={handleClick2}>
        <RemoveFromQueueIcon sx={{fontSize: 60}}/>
            <Typography  component="h1" variant="h5" fontWeight={600}>
          Checkout!
        </Typography>
        <Typography  component="h1" variant="h6" fontSize={15}>
          Checkout after your project is done!
        </Typography></div>
        </Grid>
    </Grid>
    : path===1?<div>{ComponentList2[page1]}</div>:
    <Free data={data}
    formData={formData}
    setFormData={setFormData}
    page={page} 
    setPage={setPage}/>
)

}