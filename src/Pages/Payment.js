import React, { useState, useEffect, useCallback } from 'react';
import './Payment.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import PaymentCalculator from "../Components/PaymentCalculator";

function BasicCard(obj, setSelectedUser) {
	let openVenmo= function() {
	    setSelectedUser(obj['venmoUsername'])
	}

  return (
    <Card sx={{ minWidth: 275, maxWidth:275, backgroundColor: "rgb(18, 18, 18)", color: "white", margin: "10px" }} >
	<CardMedia
          component="img"
          height="140"
          image={obj['img']}
		alt={"Picture of " + obj['name']}
        />
      <CardContent>

		<Typography gutterBottom variant="h6" component="div">
			{obj['name']} <br/>
			Venmo: {obj['venmoUsername']}
          </Typography>

      </CardContent>
      <CardActions>
		<div onClick={openVenmo} class="paypal-button paypal-button-number-1 paypal-button-layout-vertical paypal-button-shape-rect paypal-button-branding-branded paypal-button-number-multiple paypal-button-env-production paypal-should-focus paypal-button-label-venmo paypal-button-color-blue paypal-button-logo-color-white">
			<div class="paypal-button-label-container" style ={{display: "flex", flexFlow: "row wrap"}}>
				<div style={{paddingRight: "5px", paddingLeft: "10px", fontSize: "20px"}}>Pay now with:</div>
				<img class="paypal-button-logo paypal-button-logo-venmo paypal-button-logo-blue" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAxIiBoZWlnaHQ9IjMyIiB2aWV3Qm94PSIwIDAgMTAxIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IldoaXRlIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPGcgaWQ9IkxvZ28iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE2LjY2NjA0ODQsMC4xOCBDMTcuMzQ2NjYyNiwxLjMzOTA5OTEgMTcuNjUzNTA2OSwyLjUzMjk3Mjk3IDE3LjY1MzUwNjksNC4wNDEwODEwOCBDMTcuNjUzNTA2OSw4Ljg1MTE3MTE3IDEzLjY3MTM0NiwxNS4wOTk4MTk4IDEwLjQzOTM0NiwxOS40ODc1Njc2IEwzLjA1NzI1OTUyLDE5LjQ4NzU2NzYgTDAuMDk2NjMxNDg3OSwxLjIzMzE1MzE1IEw2LjU2MDQ1Njc1LDAuNjAwMzYwMzYgTDguMTI1NzgyMDEsMTMuNTg5NTQ5NSBDOS41ODgzNTk4NiwxMS4xMzI2MTI2IDExLjM5MzI1NDMsNy4yNzE1MzE1MyAxMS4zOTMyNTQzLDQuNjM5MDk5MSBDMTEuMzkzMjU0MywzLjE5ODE5ODIgMTEuMTUzODU5OSwyLjIxNjc1Njc2IDEwLjc3OTc0MDUsMS40MDg2NDg2NSBMMTYuNjY2MDQ4NCwwLjE4IFogTTI0LjkwNzE1OTIsMTEuNjkzODczOSBDMjQuOTA3MTU5MiwxMy44MzY3NTY4IDI2LjA2MjcxOCwxNC42Nzc0Nzc1IDI3LjU5NDY2NzgsMTQuNjc3NDc3NSBDMjkuMjYyOTE1MiwxNC42Nzc0Nzc1IDMwLjg2MDIxOCwxNC4yNTcxMTcxIDMyLjkzNjMwOTcsMTMuMTY5MTg5MiBMMzIuMTU0MzQ2LDE4LjY0NDUwNDUgQzMwLjY5MTU5MzQsMTkuMzgxNDQxNCAyOC40MTE5MjkxLDE5Ljg3MzE1MzIgMjYuMTk5MTkwMywxOS44NzMxNTMyIEMyMC41ODYzNTEyLDE5Ljg3MzE1MzIgMTguNTc3NTM0NiwxNi4zNjMyNDMyIDE4LjU3NzUzNDYsMTEuOTc1MzE1MyBDMTguNTc3NTM0Niw2LjI4ODEwODExIDIxLjg0NTE4MTcsMC4yNDkzNjkzNjkgMjguNTgxOTUxNiwwLjI0OTM2OTM2OSBDMzIuMjkwOTkzMSwwLjI0OTM2OTM2OSAzNC4zNjQ5ODc5LDIuMzkyMDcyMDcgMzQuMzY0OTg3OSw1LjM3NTY3NTY4IEMzNC4zNjUzMzc0LDEwLjE4NTU4NTYgMjguMzc4Mzc4OSwxMS42NTkwOTkxIDI0LjkwNzE1OTIsMTEuNjkzODczOSBaIE0yNS4wNDM0NTY3LDguMjE4MTk4MiBDMjYuMjMyOTE1Miw4LjIxODE5ODIgMjkuMjI3NDQyOSw3LjY1NzExNzEyIDI5LjIyNzQ0MjksNS45MDIxNjIxNiBDMjkuMjI3NDQyOSw1LjA1OTQ1OTQ2IDI4LjY0OTU3NjEsNC42MzkwOTkxIDI3Ljk2ODYxMjUsNC42MzkwOTkxIEMyNi43NzcyMzE4LDQuNjM5MDk5MSAyNS4yMTM4Mjg3LDYuMTEyMjUyMjUgMjUuMDQzNDU2Nyw4LjIxODE5ODIgWiBNNTMuMDE4NzA5Myw0LjQ2MzYwMzYgQzUzLjAxODcwOTMsNS4xNjU1ODU1OSA1Mi45MTU0Mzc3LDYuMTgzNzgzNzggNTIuODEyNjkwMyw2Ljg0OTE4OTE5IEw1MC44NzMwNzA5LDE5LjQ4NzM4NzQgTDQ0LjU3OTA5MzQsMTkuNDg3Mzg3NCBMNDYuMzQ4MzQwOCw3LjkwMjE2MjE2IEM0Ni4zODE4OTEsNy41ODc5Mjc5MyA0Ni40ODQ5ODc5LDYuOTU1MzE1MzIgNDYuNDg0OTg3OSw2LjYwNDMyNDMyIEM0Ni40ODQ5ODc5LDUuNzYxNjIxNjIgNDUuOTc0Mzk2Miw1LjU1MTM1MTM1IDQ1LjM2MDUzMjksNS41NTEzNTEzNSBDNDQuNTQ1MTkzOCw1LjU1MTM1MTM1IDQzLjcyNzkzMjUsNS45MzcxMTcxMiA0My4xODM2MTU5LDYuMjE4NzM4NzQgTDQxLjE3Njg5NjIsMTkuNDg3NTY3NiBMMzQuODQ3NDQ2NCwxOS40ODc1Njc2IEwzNy43MzkwNTE5LDAuNTY1OTQ1OTQ2IEw0My4yMTcxNjYxLDAuNTY1OTQ1OTQ2IEw0My4yODY1MzgxLDIuMDc2MjE2MjIgQzQ0LjU3ODkxODcsMS4xOTg3Mzg3NCA0Ni4yODA3MTYzLDAuMjQ5NzI5NzMgNDguNjk1MjgwMywwLjI0OTcyOTczIEM1MS44OTQyNTQzLDAuMjQ5MzY5MzY5IDUzLjAxODcwOTMsMS45MzQ5NTQ5NSA1My4wMTg3MDkzLDQuNDYzNjAzNiBaIE03MS43MDM3MDkzLDIuMzIwNzIwNzIgQzczLjUwNjMzMjIsMC45ODgxMDgxMDggNzUuMjA4NDc5MiwwLjI0OTM2OTM2OSA3Ny41NTU0MTg3LDAuMjQ5MzY5MzY5IEM4MC43ODcyNDM5LDAuMjQ5MzY5MzY5IDgxLjkxMTM0OTUsMS45MzQ5NTQ5NSA4MS45MTEzNDk1LDQuNDYzNjAzNiBDODEuOTExMzQ5NSw1LjE2NTU4NTU5IDgxLjgwODQyNzMsNi4xODM3ODM3OCA4MS43MDU2Nzk5LDYuODQ5MTg5MTkgTDc5Ljc2ODMzMjIsMTkuNDg3Mzg3NCBMNzMuNDcyNjA3MywxOS40ODczODc0IEw3NS4yNzU1Nzk2LDcuNjU3Mjk3MyBDNzUuMzA4NzgwMyw3LjM0MTA4MTA4IDc1LjM3ODUwMTcsNi45NTUzMTUzMiA3NS4zNzg1MDE3LDYuNzEwNjMwNjMgQzc1LjM3ODUwMTcsNS43NjE4MDE4IDc0Ljg2NzczNTMsNS41NTEzNTEzNSA3NC4yNTQwNDY3LDUuNTUxMzUxMzUgQzczLjQ3MjI1NzgsNS41NTEzNTEzNSA3Mi42OTA4MTgzLDUuOTAyMzQyMzQgNzIuMTEwNjc5OSw2LjIxODczODc0IEw3MC4xMDQzMDk3LDE5LjQ4NzU2NzYgTDYzLjgxMDE1NzQsMTkuNDg3NTY3NiBMNjUuNjEzMTI5OCw3LjY1NzQ3NzQ4IEM2NS42NDYzMzA0LDcuMzQxMjYxMjYgNjUuNzEzOTU1LDYuOTU1NDk1NSA2NS43MTM5NTUsNi43MTA4MTA4MSBDNjUuNzEzOTU1LDUuNzYxOTgxOTggNjUuMjAzMDEzOCw1LjU1MTUzMTUzIDY0LjU5MTQyMjEsNS41NTE1MzE1MyBDNjMuNzc0MzM1Niw1LjU1MTUzMTUzIDYyLjk1ODgyMTgsNS45MzcyOTczIDYyLjQxNDUwNTIsNi4yMTg5MTg5MiBMNjAuNDA2MjEyOCwxOS40ODc3NDc3IEw1NC4wNzg4NTk5LDE5LjQ4Nzc0NzcgTDU2Ljk3MDExNTksMC41NjYxMjYxMjYgTDYyLjM4MTMwNDUsMC41NjYxMjYxMjYgTDYyLjU1MTMyNywyLjE0NTc2NTc3IEM2My44MTAxNTc0LDEuMTk5MDk5MSA2NS41MTA1NTcxLDAuMjUwMDkwMDkgNjcuNzkwMDQ2NywwLjI1MDA5MDA5IEM2OS43NjM3NDA1LDAuMjQ5MzY5MzY5IDcxLjA1NTk0NjQsMS4xMjcwMjcwMyA3MS43MDM3MDkzLDIuMzIwNzIwNzIgWiBNODMuNTUwNTksMTEuNzk5ODE5OCBDODMuNTUwNTksNS44MzI3OTI3OSA4Ni42MTIwNDMzLDAuMjQ5MzY5MzY5IDkzLjY1NTgzMjIsMC4yNDkzNjkzNjkgQzk4Ljk2MzM5OTcsMC4yNDkzNjkzNjkgMTAwLjkwMzU0MywzLjQ3OTgxOTgyIDEwMC45MDM1NDMsNy45Mzg3Mzg3NCBDMTAwLjkwMzU0MywxMy44MzY1NzY2IDk3Ljg3NTExNTksMTkuOTQ0MzI0MyA5MC42NjE0NzkyLDE5Ljk0NDMyNDMgQzg1LjMxOTY2MjYsMTkuOTQ0MzI0MyA4My41NTA1OSwxNi4zMjgxMDgxIDgzLjU1MDU5LDExLjc5OTgxOTggWiBNOTQuNDM3NDQ2NCw3LjgzMjc5Mjc5IEM5NC40Mzc0NDY0LDYuMjg4MTA4MTEgOTQuMDYyODAyOCw1LjIzNDk1NDk1IDkyLjk0MDk2ODksNS4yMzQ5NTQ5NSBDOTAuNDU3MDMyOSw1LjIzNDk1NDk1IDg5Ljk0Njk2NTQsOS43NjMwNjMwNiA4OS45NDY5NjU0LDEyLjA3OTQ1OTUgQzg5Ljk0Njk2NTQsMTMuODM2NzU2OCA5MC40MjM4MzIyLDE0LjkyNDMyNDMgOTEuNTQ1MzE2NiwxNC45MjQzMjQzIEM5My44OTMxMjk4LDE0LjkyNDMyNDMgOTQuNDM3NDQ2NCwxMC4xNDkwMDkgOTQuNDM3NDQ2NCw3LjgzMjc5Mjc5IFoiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg" alt="" aria-label="venmo"/>
			</div>
		</div>
      </CardActions>
    </Card>
  );
}

function Payment() {
	const [data, setData] = useState(null);
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', '/data/getRegularVenmo.json');
		xhr.onload = function() {
			if (xhr.status === 200) {
				setData(JSON.parse(xhr.responseText));
			}
		};
		xhr.send();
	}, []);
	let makeVenmoCall = useCallback((amt) => {
	    if(amt !== "0.00")
            document.getElementById('venmoLoader').src = "venmo://paycharge?recipients=" + selectedUser + "&amount=" + amt + "&note=Sullys%20House&tnx=pay";
            setTimeout(() => {
              if (document.visibilityState !== 'visible') {
                window.location.href = 'https://venmo.com/';
              }
            }, 2000);
        setSelectedUser(null)
    }
    , [selectedUser, setSelectedUser])


  return (
    <>
      <div style={{fontSize: "25px"}}>
		After our regular climbing we usually go to Sully's House. As we go as one group, the meetup host will usually pick up the bill.<br/> PLEASE CONFIRM WHO THE HOST IS FOR THE DAY BEFORE SENDING PAYMENT.
	  </div>
	  {selectedUser ? <PaymentCalculator onClosePopup={makeVenmoCall}/> : null}
	  <div style={{width: "100%", margin: "auo"}}>
		  <div class="cardContainer" style={{display: "flex", flexFlow: "row wrap"}}>
			  {data?.length > 0 ? data.map( function(obj, index) { return BasicCard(obj, setSelectedUser) }) : null }

		  </div>
	  </div>
	  <iframe id="venmoLoader" />
    </>
  );
}

export default Payment;
