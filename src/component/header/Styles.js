import styled from "styled-components";
import { createGlobalStyle } from 'styled-components'

import MediaQuery from '../MediaQuery';
import Colores from '../Colores';

//COLORES
const { light, dark } = Colores.body;
const { headerlight, headerdark } = Colores.header;

//MEDIA QUERYS
const { tablet } = MediaQuery.query;

//BODY GLOBAL STYLE
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.darkMode ? `${dark}` : `${light}`)};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

// HEADER
export const HeaderStyles = styled.header`
    background:  ${props => props.darkMode ? `${headerdark}` : `${headerlight}`};
    padding: 20px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    box-shadow: ${props => props.darkMode ? "none" : "0px 0px 10px #dddde3"};
    @media (max-width: ${tablet}) {
        display: block;
      }
`;

export const LogoImg = styled.article`
        flex: 5%;
        margin-right: 10px;
        margin-bottom: 10px; 

    > div {
        background-image: url('/img/marvel-logo2.png');
        height: 40px;
        width: 117px;
        background-size: cover;
        margin: auto;
    }
`;

export const ButtonMode = styled.article`
    background: ${props => props.darkMode ? `${headerlight}` : `${headerdark}`};
    border: none;
    position: fixed;
    right: 0px;
    cursor: pointer;
    color: ${props => props.darkMode ? `${headerdark}` : `${headerlight}`};
    font-weight: bold;
    top: 0px;
    border-radius: 0px 0px 0px 5px;
    padding: 10px 15px;
`;

//HEADER > FORM INPUT
export const SearchArticle = styled.article`
    flex: 80%;
`;

export const Err = styled.div`
    color: ${props => props.darkMode ? "#ffffff" : "#000000"}
`;

export const SearchForm = styled.form`
    > input {
    width: 80%;
    padding: 12px 35px;
    border: 1px solid #ffffff;
    color: #b7a4a4;
    font-weight: bold;
    @media (max-width: ${tablet}) {
      width: 85%;
    }
    }
    &::before {
      content: "";
      background-image: url('/img/icon.png');
      position: absolute;
      width: 70px;
      height: 50px;
      margin-left: 0px;
      background-size: 42%;
      background-repeat: no-repeat;
      margin-top: 6px;
      margin-left 5px;
      opacity: 0.5;
    }

`;





