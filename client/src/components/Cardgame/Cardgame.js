import React from 'react';
import styles from './Cardgame.module.css';
import {Link} from 'react-router-dom';

/*Componente que renderiza las tarjetas de los videojuegos del estado global*/

export function Cardgame({id,name,image,released}) {

  return (
    <div className={styles.card}>
        <div>
        <Link to={`/game/${id}`}><h5 className="card-title">{name}</h5> </Link>
        </div>
        {/* <div className={styles.divimagen}> */}
          <img src={image} alt='No existe imagen'/>
        {/* </div> */}3
        <div>
          <h1>{released}</h1>
        </div>
    </div>
  )
};

export default Cardgame;