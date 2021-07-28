import React from "react";
import {useDispatch,useSelector} from "react-redux";
import {all} from "../../actions/index";
import styles from './All.module.css';

/*Botón de Todos, se dedica a renderizar el estado global que exista en ese momento */

export default function All() {

    let pageState = useSelector((state) => state.page);

    const dispatch = useDispatch();

    const allTodo = (event) => {
       
        event.preventDefault();
        dispatch(all(pageState));
      }


    return (
      
           <>
            <button  className= {styles.btn} onClick={allTodo}>todos</button> 
          </>
      )

};