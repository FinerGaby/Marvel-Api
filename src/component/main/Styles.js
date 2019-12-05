import styled from "styled-components";

import MediaQuery from '../MediaQuery';
import Colores from '../Colores';

//COLORES
const { light } = Colores.body;

//MEDIA QUERYS
const { mobileL, tablet, laptop } = MediaQuery.query;


//MAIN.JS
export const Container = styled.section`
    padding: 20px;
    display: inline-flex;
    flex-wrap: wrap;
    @media (max-width: ${mobileL}) {
        display: block;
      }
`;


//CARD.JS
export const Cards = styled.article`
    flex: 19% 0;
    margin: auto;
    margin-left: 11px;
    margin-bottom: 30px
    background:  ${props => props.darkMode ? "#403a3a" : `${light}`};
    text-align: center;
    height: 350px;
    box-shadow: ${props => props.darkMode ? "none" : "1px 1px 6px #c9c9c9"};
    border-radius: 5px;
      @media (max-width: ${tablet}) {
        height: 270px;
      }
`;

export const ThumbnailImg = styled.div`
    background-image: ${props => `url('${props.imagen}/detail.jpg')`};
    height: 250px;
    width: 250px;
    background-size: cover;
    margin: auto;
    @media (max-width: ${laptop}) {
        height: 220px;
        width: 220px;
      }
    @media (max-width: ${tablet}) {
        height: 170px;
        width: 170px;
      }
`;

export const InformationText = styled.div`
    padding: 10px;
    font-weight: bold;
    color: ${props => props.darkMode ? "#ffffff" : "#5c5c5c"};  
    > span {
        color: ${props => props.darkMode ? "#ffffff" : "#999999"};  
      } 
`;

//MODALBOX.JS
export const Modal = styled.div`
    position: fixed;
    background:rgba(0,0,0, 0.80);
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
`;

export const InfoModal = styled.div`
    background:#ffffff;
    margin: auto;
    width: 50%;
    padding: 15px;
    font-size: 11px;
    text-align: center;
    @media (max-width: ${laptop}) {
        width: 78%
      }
    @media (max-width: ${mobileL}) {
        font-size: 10px;
    }
`;

export const InfoModalText = styled.div`
    font-size: 13px;
    @media (max-width: ${laptop}) {
        font-size: 11px;
      }
      @media (max-width: ${mobileL}) {
        font-size: 10px;
      }
`;

export const ComicList = styled.div`
    display: flex;
    flex-wrap: wrap;
    > div {
        flex: 50% 0;
    }
`;



