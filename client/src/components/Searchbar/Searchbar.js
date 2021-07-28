import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {buscar} from "../../actions/index";
import { useHistory} from 'react-router-dom';
import styles from './Searchbar.module.scss';
import { FaSearch }  from 'react-icons/fa';

/*  Barra de búsqueda que envia un action para crear un estado con la input correspondiente */

export default function SearchBar() {

  const dispatch = useDispatch();
  const { push } = useHistory()

  const [title, setTitle] = useState(" ");

  const handleChange = (event) => {
    setTitle( event.target.value );
  }

  const handleSubmit =(event) => {
    event.preventDefault();
    dispatch(buscar(title));
    push('/search');
  }

  return (
    <form className="form-container" onSubmit={(e) => handleSubmit(e)} >
      <input
        type="text"
        id="title"
        className={styles.searchbox}
        value={title}
        onChange={(e) => handleChange(e)}
      />
      <label for="searchbox"><FaSearch className={styles.searchicon}/></label>
    
      {/* <button  type="submit" id={styles.searchsubmit} >buscar</button> */}

      <input type="submit" id={styles.searchsubmit} />
    
    
    {/* className={styles.btn} */}

  </form>
  );
}

