import React, { useState } from 'react';
import { FetchConsumer } from '../../context/FetchContext';
import ModalBox from './ModalBox';

//STYLES COMPONENT
import { Cards, ThumbnailImg, InformationText} from './Styles'


const Card = () => {

    //REALIZO STATE COMPONENTE UNICO QUE USARE
    const [modal, setModal] = useState(false)

    return (
        <FetchConsumer>
            {(value) => {

            // OBTENGO EL STATE DE MI CONTEXT
            const { dataPersonaje, darkMode } = value;

            const modalBox = () => { 
                setModal(true) 
                }
            
            /**
            * @param {Boolean} Callback ----- Booleano para actualizar el state del context
            */
            const closedModal = (callback) => {
                console.log(callback)
                setModal(callback)
            }

            let CardsComponent;
            if(dataPersonaje) {
               
            const { name, thumbnail } = dataPersonaje;
            const imagenPreview = thumbnail.path 

            CardsComponent =
                <Cards onClick={modalBox} darkMode={darkMode}>
                        <ThumbnailImg imagen={imagenPreview}/>  
                        <InformationText darkMode={darkMode}>
                            <span>Tools</span>
                            <h2>{name}</h2>
                        </InformationText>
                </Cards>
            }

    return (
        <React.Fragment>
            {CardsComponent}
            {modal ? <ModalBox closedModal={closedModal} dataModal={dataPersonaje} /> :null}
        </React.Fragment>
        )}} 
        </FetchConsumer>
    )
}

export default Card
