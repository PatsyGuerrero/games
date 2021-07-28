import React from 'react';
import {useSelector} from "react-redux";
import styles from './OrdenMostrar.module.css'

/*Componente que renderiza el estado global por rating*/

export function Rating(props) {

    let rating = useSelector((state) => state.ratingState);

    if (rating.length === 0 ) {
        return (
            <div><h2>No se encontraron juegos por ese rating</h2></div>
        );
    }

    return (
      
        <div className={styles.cont}>

           { rating.map(item  => (

            <div className={styles.cardorden}>
                <h5>{item.name}</h5>
                <h6>{item.rating}</h6>
                <img src={`${item.image}`} alt="No existe imagen"/>
                <h6>{item.released}</h6>
            </div>

            ))}
        </div>

    )

};

export default Rating;