import React from 'react';
import Playstation from '../../img/palanca.png';
import styles from './Landing.module.css'

import {Link} from 'react-router-dom';

export default function Landing() {
    return (
      <div className={styles.wrapper}>
       
            <div className={styles.landing}>
              <img src={Playstation} width='fit-content' height='300' alt="Not Found" />
            </div>
            <div >
            <Link to={`/home`}><button  className= 'button'>INICIAR</button> </Link>
            </div>
      </div>
      );
    };