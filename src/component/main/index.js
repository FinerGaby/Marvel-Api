import React from 'react'
import Card from './Card'

//STYLES COMPONENT
import { Container } from './Styles'

const Main = () => {

    // GENERO UN ARRAY PARA COPIAR MI <CARD />
    const CopyCard = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <Container>
            { CopyCard.map((index) => (  <Card key={index} /> ))}
        </Container>
    )
}

export default Main
