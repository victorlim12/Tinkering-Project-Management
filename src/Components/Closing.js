import { Button, Typography } from '@mui/material'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export function Lastpage({setPage, Page}){
    return(
        <div>
        <ThumbUpIcon sx={{fontSize: 50}}/>
        <Typography  component="h1" variant="h5" fontWeight={600}>
          Your response has been captured! 
        </Typography>
        <br/>
        <Button 
            onClick={()=> setPage(0)}
            variant="contained"
            color="primary"
            size='medium'
          >Go Home</Button>
        </div>
    )
}