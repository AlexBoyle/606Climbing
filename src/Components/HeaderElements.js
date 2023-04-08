import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`

height: 85px;
display: flex;
justify-content: space-between;
z-index: 12;
background-color: rgb(28 53 80 / 80%); 
color: white;
`;

export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	background-color: rgba(255,255,255,.15);
	color: white;
}
:hover {
	transition: all 0.3s ease-in-out;
	background-color: rgba(255,255,255,.1);
	
}
`;

export const Bars = styled(FaBars)`
display: none;
color: white;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {

}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
@media screen and (max-width: 768px) {
	
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: rgb(28 53 80 / 80%);
padding: 10px 22px;
color: white;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #000000;
	color: #aaaaaa;
}
`;
