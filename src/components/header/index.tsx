import React from 'react';
import { Container } from './styles';
import logo from '../../assets/logo.png';
import Menu from '../Menu';

const Header:React.FC = () => {
    return(
        <>
        <Container>
            <img src={logo} height="40" alt="Summer Drinks"/>
                Summer Drink
        </Container>
        <Menu/>
        </>
    )
}

export default Header;