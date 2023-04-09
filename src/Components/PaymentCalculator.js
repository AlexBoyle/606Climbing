import React, { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { ThemeProvider, createTheme } from "@mui/material/styles";
export default function PaymentCalculator({ onClosePopup }) {
	const [open, setOpen] = React.useState(true);
	const [amount, setAmount] = React.useState(0);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleChange = (event) => {
		setAmount(event.target.value);
	};

	const handleClose = useCallback(
		(amtString) => {
			onClosePopup?.(amtString);
			setOpen(false);
			setAmount(0);
		},
		[setAmount, setOpen]
	);
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<div style={{ backgroundColor: "rgb(26, 32, 39)", color: "white" }}>
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
							type="text"
							fullWidth
							variant="standard"
						/>
						<DialogContentText>
							Tax: ~${(parseFloat(amount) * 0.1075).toFixed(2)}
							<br />
							Tip: ~$
							{(
								(parseFloat(amount) + parseFloat(amount) * 0.1075) *
								0.2
							).toFixed(2)}
							<br />
							Total: $
							{(
								parseFloat(amount) +
								parseFloat(amount) * 0.1075 +
								(parseFloat(amount) + parseFloat(amount) * 0.1075) * 0.2
							).toFixed(2)}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button
							onClick={() => {
								handleClose("0.00");
							}}
						>
							Cancel
						</Button>
						<Button
							onClick={() => {
								handleClose(
									(
										parseFloat(amount) +
										parseFloat(amount) * 0.1075 +
										(parseFloat(amount) + parseFloat(amount) * 0.1075) * 0.2
									).toFixed(2)
								);
							}}
						>
							Send
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</ThemeProvider>
	);
}
