import React from 'react';
import {useSelector} from "react-redux";
import styles from './GenreFilter.module.css'

/*Componente que renderiza los videojuegos filtrados */

export function GenreFilter() {

    let filterState = useSelector((state) => state.filter);
    // console.log('filterestado', filterState);

    if (filterState.length === 0 ) {
        return (
            <div><h2>No se encontraron juegos por ese filtro seleccionado</h2></div>
        );
    }
    return (
      
        <div className={styles.contenedor}>
           { filterState.map(item  => (
            <div className={styles.cardgenre}>
                <h5>{item.name}</h5>
                <img src={`${item.image}`} alt="No existe imagen"/>
                <h6>{item.released}</h6>
            </div>
            ))}
        </div>
       
    )
};
  
  export default  GenreFilter;