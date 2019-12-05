import React from 'react'

import { Modal, InfoModal, InfoModalText, ComicList } from './Styles'


const ModalBox = ({dataModal, closedModal}) => {

    // OBTENGO LOS DATOS QUE LES PASO POR PROPS
    const { name, description, comics } = dataModal;
    const comicsList = comics.items;

    return (

        <Modal onClick={() => closedModal(false)}>
            <InfoModal onClick={() => closedModal(false)}>
                <InfoModalText>
                    <h2>{name}</h2>
                    <h3>{description}</h3>
                </InfoModalText>
                <ComicList>
                    {comicsList.map((comic, index) => (<div key={index}>{comic.name}</div>))}
                </ComicList>
            </InfoModal>
        </Modal>

    )
}

export default ModalBox
