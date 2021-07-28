import React from "react";
import {useDispatch} from "react-redux";
import {user} from "../../actions/index";
import styles from './User.module.css';

/* Boton User que dispara un action para renderizar los juegos de la base de datos*/
export default function User(props) {

    const dispatch = useDispatch();

    const userBtn = (event) => {
      event.preventDefault();
      dispatch(user());
    }

    return (
      
          <>
            <button  className={styles.btn} onClick={userBtn}>user</button>
          </>
      )

};