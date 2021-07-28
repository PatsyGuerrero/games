import React from "react";
import {useSelector} from "react-redux";
import styles from './Buscador.module.css';
import {Link} from 'react-router-dom';

/*Componente que renderiza el estado (Busqueda) creado a partir del envio de la query del input  */

export function Buscador() {

    let buscarState = useSelector((state) => state.gamesSearch);

    return (
        <>
        <Link to={`/home`}><button  className= 'button'>Regresar</button> </Link>

        <div className={styles.buscador}>

           { buscarState.map(item  => (
               
            <div className={styles.search}>
            <h5>{item.name}</h5>
            <img src={`${item.background_image}`} alt='No existe imagen' />
            <h6>{item.released}</h6>
            <h5>Generos</h5>
            {item.genres.map((e) => (
                        <div>
                        <span>{e.name}</span>
                        </div>
                    ))}
            </div>
            ))}
        </div>
       </>
    )

};

export default Buscador;