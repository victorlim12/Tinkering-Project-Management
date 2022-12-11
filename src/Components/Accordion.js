import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion(props) {
  return (
    <div style={{display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}>
      <Accordion sx={{width:'60%', justifySelf:'center'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> {props.text}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={props.Style}>
            {props.children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}