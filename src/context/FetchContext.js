import React, { useState } from 'react';

const FetchContext = React.createContext();
export const FetchConsumer = FetchContext.Consumer;

const FetchProvider = (props) => {

    //REALIZO STATE GLOBALES
    const [dataPersonaje, setDataPersonaje] = useState(false)
    const [ error, setError ] = useState(false)
    const [ darkMode, setDarkMode ] = useState(false)

    /**
    * @param {Boolean} callback ----- booleano para actualizar el state
    */
    const handleColor = (callback) => {
        if(darkMode) {
          setDarkMode(false)
        } else {
          setDarkMode(callback)
        }
    }

    /**
    * @param {String} values ----- String con los datos del input
    */
    let fetchSearch
    fetchSearch = async (values) => {

      if(values.length === 0) {
          setError('No escribio nada')
          return
      }

      //DATOS DE LA API
      const apiKey = `0039f819a295423ca8288aea283488c5`;
      const hash = `b30f212e3826aa38515664e728c2af00`
      const url = `http://gateway.marvel.com/v1/public/characters?apikey=${apiKey}&ts=9&hash=${hash}&name=${values}`;

      try {
        // HEADERS - METHOD
        const config = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };

        // OBTENGO LOS DATOS DEL FETCH
        const res = await fetch(`${url}`, config);
        const resJson = await res.json();
        const data  = resJson.data.results[0]
        
        if(data === undefined) {
            setError('No se encontro el personaje')
            return
        }

        // ACTUALIZO EL STATE CON LOS DATOS OBTENIDOS
        setDataPersonaje(data)

        // LIMPIO STATE ERROR
        setError(false)

      } 
      catch(error) {
            //ERROR POR CONSOLA
            console.log(error)
        }
    }

    return (

      <FetchContext.Provider
        value={{
            fetchSearch,
            dataPersonaje,
            error,
            handleColor,
            darkMode
        }}
      >
       {props.children}
      </FetchContext.Provider>
    );
};

export default FetchProvider;