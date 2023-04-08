import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './HeaderElements';

function Header() {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/' activeStyle style={{paddingLeft: '0px', width: '85px'}}>
                        <img src="/images/606Logo.png" style={{height: "85px"}}/>
                    </NavLink>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/events' activeStyle>
                        Events
                    </NavLink>
                    <NavLink to='/social' activeStyle>
                        Join Our Socials
                    </NavLink>
                    <NavLink to='/payment' activeStyle>
                        Payments
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Header;
