import React from "react"
import '../App.css'
import { Grid } from "@mui/material"

export default function CardInterface({page, setPage, formData, setFormData, data}){
return(
    <Grid container spacing={5}>
        <Grid container item xs={6}>
        <div className="Form"> </div>
        </Grid>
        <Grid container item xs={6}>
        <div className="Form"> </div>
        </Grid>
    </Grid>
)

}