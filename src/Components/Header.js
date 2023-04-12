import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./HeaderElements";

function Header() {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/events">Events</NavLink>
					<NavLink to="/social">Join Our Socials</NavLink>
					<NavLink to="/payment">Payments</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
}

export default Header;
