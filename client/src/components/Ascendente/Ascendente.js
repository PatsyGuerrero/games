import React from 'react';
import {useSelector} from "react-redux";
import styles from './Ascendente.module.css'

export function Ascendente(props) { 

     let sortState = useSelector((state) => state.gamesSort);

    // console.log('filterestado', filterState);
    return (
      
        <div className={styles.cont_asc}>
           { sortState.map(item  => (

            <div className={styles.card_asc}>
                <h5>{item.name}</h5>
                <img src={`${item.image}`} alt='No existe imagen' />
                <h6>{item.released}</h6>
            </div>

            ))}
        </div>
       
    )
};
  
  export default Ascendente;