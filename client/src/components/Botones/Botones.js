import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {nextP} from "../../actions/index";
import styles from './Botones.module.css';


export function Botones() {

    let page = useSelector((state) => state.page);

    const dispatch= useDispatch();
  
  
    const handlePagePrev = () => {
        if(page > 1) {
            dispatch(nextP(--page));
        }
    };

    const handlePageNext = () => { 
            dispatch(nextP(++page));  
    };

  

    return (
        <>
            <button className={styles.btn} onClick={handlePagePrev}>previous</button>   
            <button className={styles.btn} onClick={handlePageNext}>next</button>
        </>

    )

}

export default Botones;