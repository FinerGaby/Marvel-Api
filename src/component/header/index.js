import React from 'react'
import Logo from './Logo'
import Search from './Search'

import { FetchConsumer } from '../../context/FetchContext';

//STYLES COMPONENT
import { HeaderStyles, GlobalStyle, ButtonMode } from './Styles'

const Header = () => {

    
    return (
        <FetchConsumer>
            {(value) => {

           const { darkMode, handleColor } = value;

    return (
        <HeaderStyles darkMode={darkMode}>
            <GlobalStyle darkMode={darkMode}/>
            <Logo />
            <Search />
            <ButtonMode onClick={() => handleColor(true)} darkMode={darkMode}>{darkMode ? "Light" : "Dark"}</ButtonMode>
        </HeaderStyles>
        )}}
        </FetchConsumer>
    )
}

export default Header
