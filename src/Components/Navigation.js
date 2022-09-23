import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import { Fade } from 'react-reveal';

function Navigation() {
    return (
        <Fade top>
        <NavigationStyled>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </NavigationStyled>
        </Fade>
    )
}


const NavigationStyled = styled.nav`
    display: flex;
    justify-content: center;
    min-height: 10vh;
    align-items: center;
`;
export default Navigation;