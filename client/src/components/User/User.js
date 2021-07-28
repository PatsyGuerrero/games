import React from 'react';
import styles from './User.module.css';
import {useSelector} from "react-redux";

/*Componente que renderiza los juegos de la base de datos */

export function Gamebase(props) {

    let juegosBase = useSelector((state) => state.gamesBD);

  return (

        <div className={styles.contenedor}>

            { juegosBase.map(item  => (
                <div className={styles.game}>
                    <h5>{item.name}</h5>
                    <h5>Descripción</h5>
                    <span>{item.description}</span>
                    <h5>Plataformas</h5>
                    <span>{item.platforms}</span>
                    <h5>Generos</h5>
                    { item.generos && item.generos.map((e) => (
                            <div>
                            <span>{e.nombre}</span>
                            </div>
                        ))
                    } 
                    <h6>{item.release_date}</h6>
            </div>
            ))}
        </div>
  )
};

export default Gamebase;