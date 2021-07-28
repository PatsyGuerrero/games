import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {getAll, getAlldb} from "../../actions/index";
import {  useEffect  } from 'react';
import Cardgame from '../Cardgame/Cardgame.js';
import styles from './Cards.module.css';


/* Contenedor de las tarjetas */

export function Cards() {

 let juegos = useSelector((state) => state.games);
 let page = useSelector((state) => state.page);


 let dispatch= useDispatch();

useEffect(() => {
  dispatch(getAll(page));
  dispatch(getAlldb());
}, [dispatch,page]);
  
      return (
        
        <>
          <div className={styles.contenedor} >
              {
                juegos && juegos.map(item =>(
                  <Cardgame
                  key={item.id}
                  id= {item.id}
                  name={item.name}
                  image={item.image}
                  released= {item.released}
                  />
                  ) 
                )}
          </div>
      </>
      )
    
};


export default Cards;