import React, { useState, useEffect, useCallback } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PaymentCalculator({onClosePopup}) {
  const [open, setOpen] = React.useState(true);
  const [amount, setAmount] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
        setAmount(event.target.value);
  }

  const handleClose = useCallback((amtString) => {
    onClosePopup?.(amtString);
    setOpen(false);
    setAmount(0)
  }, [setAmount, setOpen]);

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Total</DialogTitle>
        <DialogContent>
            <TextField
                value={amount ? amount : ""}
                onChange={handleChange}
                autoFocus
                margin="dense"
                id="amount"
                label="amount"
                type="number"
                fullWidth
                variant="standard"
              />
          <DialogContentText>
            Tax: ${(amount * .1).toFixed(2)}
            <br/>
            Tip: ${(amount * .2).toFixed(2)}
            <br/>
            Total: {(amount * 1.3).toFixed(2)}
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleClose("0.00")}}>Cancel</Button>
          <Button onClick={() => {handleClose((amount * 1.3).toFixed(2))}}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}