import React, { useEffect } from 'react';
import {useSelector} from "react-redux";
import {Link, useParams} from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import {gameDetalle} from "../../actions/index";
import styles from './Detalle.module.scss';

/* Página donde se renderiza el detalle del videojuego donde han dado clic */

export default function Detalle () {

    let {id} = useParams();
    const dispatch = useDispatch();

    let gameDetState = useSelector((state) => state.gameDetail);

    let descripcion= gameDetState.description

    useEffect(() => {
        dispatch(gameDetalle(id));   
      }, [dispatch, id]);

    return (
        <div className={styles.divcont} >
           
            <div className={styles.blog_card}>

                <div className={styles.title_content}>
                    <h3>{gameDetState.name}</h3>
                    <hr/>
                </div>

                {/* <h5>Fecha de lanzamiento:</h5> */}
                <div className={styles.intro}>
                    <h6>{gameDetState.released}</h6>
                </div>
                
                <img src={`${gameDetState.image}`} alt='No existe imagen'/>

                <div className={styles.card_info}>
                {/* <h5>Descripción</h5> */}
                {descripcion}
                </div>

                <h5>Rating</h5>
                <span>{gameDetState.rating}</span>
    
                <h5>Generos</h5>
                { gameDetState.genres && gameDetState.genres.map((e) => ( 
                                <div>                     
                                <span>{e}</span> 
                                </div>          
                        ))
                    }

                <h5>Plataformas</h5>
                { gameDetState.platforms && gameDetState.platforms.map((e) => ( 
                            <div>                     
                            <span>{e}</span> 
                            </div>                      
                        ))
                    } 
                
                <div className={styles.gradient_overlay}></div>
                <div className={styles.color_overlay}></div>
            
            </div>
            
            <Link to={`/home`}><button >Regresar</button></Link>

        </div>
    )

};