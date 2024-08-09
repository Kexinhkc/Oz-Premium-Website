'use client'
import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, Button } from "@mui/material";

export default function Popup(){
    const [open, setOpen] = useState(false);

    useEffect(() => {
      // Open the dialog when the component mounts
      setOpen(true);
    }, []); // Empty dependency array means this effect runs once on mount
  
    const handleClose = () => {
      // Function to close the dialog
      setOpen(false);
    };

    return(
    <>
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
            sx: {
              paddingY: 2, // Apply padding here to affect the inner Paper component
              paddingX:4
            },}}

       
      >
        <DialogTitle id="alert-dialog-title" sx={{display:'flex', justifyContent:'center'}}>{"Client Confirmation and Disclaimer"}</DialogTitle>
        <DialogContent id="alert-dialog-description">
          <Typography sx={{color:'primary.main'}}>
                
                By clicking Agree at the bottom of this page you are confirming that you are an Australian wholesale client for the purposes of Chapter 7 of the Corporations Act 2002. <br /><br />Access to this information is provided on the condition that it is not passed on to any person who is a retail client within the meaning of Chapter 7 of the Corporations Act 2002. <br /><br />The information contained on this website is not intended for distribution to, or by, any person or entity in any jurisdiction or country where such distribution of use would be contrary to law or regulation, or which would subject Oz Premium Finance Pty Ltd ABN 55 666 232 319 (Corporate Authorised Representative 1310538) and any subsidiaries, to any registration or other requirement within such jurisdiction or country. 
       

          </Typography>
        </DialogContent>

        <DialogActions>
            <Button onClick={handleClose} autoFocus>
                Agree
            </Button>
        </DialogActions>
      </Dialog>
      </>);
}