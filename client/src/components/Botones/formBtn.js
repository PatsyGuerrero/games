import React from 'react';
import styles from './formBtn.module.css';
import {Link} from 'react-router-dom';

/*Boton que linkea a la página del formulario */

export function FormBtn() {

    return (
      
        <>
            <Link to={`/form`}><button  className= {styles.btn}>formulario</button> </Link>
        </>
         
   )

};

export default FormBtn;