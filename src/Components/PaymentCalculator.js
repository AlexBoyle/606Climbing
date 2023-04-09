import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function PaymentCalculator({onClosePopup}) {
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
        setAmount(event.target.value);
  }

  const handleClose = (amtString) => {
    console.log(onClosePopup)
    onClosePopup?.(amtString);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Total</DialogTitle>
        <DialogContent>
            <TextField
                onChange={handleChange}
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
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
          <Button onClick={() => {handleClose(0)}}>Cancel</Button>
          <Button onClick={() => {handleClose((amount * 1.3).toFixed(2))}}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}