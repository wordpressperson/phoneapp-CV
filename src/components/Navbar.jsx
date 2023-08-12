import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button'
import '../App.css';

export class Navbar extends Component {
    render() {
        return (
                <NavWrapper className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
                    <Link to='/'>
                        <img src={logo} alt="storeimage" className="navbar-brand" />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to='/'  className="nav-link">
                                products
                            </Link>
                        </li>
                    </ul>
                    <Link to='/cart' className="ml-auto">
                        <ButtonContainer>
                            <i className="fa fa-shopping-cart ml-2" aria-hidden="true"><span className="ml-2">my cart</span></i>    
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--lightBlue);
.nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`

export default Navbar
