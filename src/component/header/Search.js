import React, { useState } from 'react';

// CONSUMER CONTEXT
import { FetchConsumer } from '../../context/FetchContext';

//STYLES COMPONENT
import { SearchArticle, SearchForm, Err } from './Styles';

const Search = () => {

    //REALIZO STATE COMPONENTE UNICO QUE USARE
    const [ valueSearch, setValueSearch ] = useState('');

    return (
        <FetchConsumer>
            {(value) => {
            
            // OBTENGO LA FUNCTION DE MI CONTEXT
            const { fetchSearch, error, darkMode } = value;

            /**
            * @param {String} e   ----- obtengo los values
            * @param {State}  setValueSearch  ----- Actualizar state 
            */
            let handleChange
            handleChange = (e) => {
                setValueSearch(e.target.value);
            }

            /**
            * @param fetchSearch ----- Context State
            */
            let handleSubmit
            handleSubmit = (e) => {

                e.preventDefault();

                // LE MANDO LOS DATOS POR CALLBACK A fetchSearch
                fetchSearch(valueSearch);

                // VUELVO AL STATE INICIAL PARA LIMPIAR EL INPUT
                setValueSearch('');

            }

    return (
        <SearchArticle>
            <SearchForm onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Buscar" 
                    name="name" 
                    onChange={handleChange} 
                    value={valueSearch} />
            </SearchForm>
            <Err darkMode={darkMode}>{error}</Err>
        </SearchArticle>
        )}}
        </FetchConsumer>
    )
}

export default Search
