import React, { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import {createGame, getAllGenres} from "../../actions/index";
import styles from './Form.module.css';
import {Link} from 'react-router-dom';

/*Componente para agregar formulario e ingresar un nuevo videojuego */

export function  Form () {

  const genres = useSelector((state) => state.genres);

  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const [datos, setDatos] = React.useState({
    name:"",
    description:"",
    release_date:"",
    rating:"",
    platforms:"",
    add:"",
    selection:[]

  });

const selectionGenres = (e) => {
    setDatos({
        ...datos,
        selection: [...datos.selection, e.target.value]
    })
}

  const handleChange = (event) => {
  
    setDatos({
        ...datos,
        [event.target.name] : event.target.value
    })
}

const enviarDatos = (event) => {
    event.preventDefault();
    dispatch(createGame(datos));
    setDatos({
          name:"",
          description:"",
          release_date:"",
          rating:"",
          platforms:"",
          add:"",
          selection:[]
    })
    alert('Registro exitoso');
}

// let {name, description,release_date,rating, platforms,selection} = datos


  return (
    <div className={styles.form1}>
        <form  onSubmit={enviarDatos} className={styles.form}>
      
            <div className={styles.formdiv}>
              <label className={styles.formlabel}> </label>
              <input name="name" type='text' placeholder="Name" onChange={handleChange} value={datos.name}  className={styles.forminput} required />
            </div>
            
            <div className={styles.formdiv}>
            <label  className={styles.formlabel} > </label>
            <textarea  name="description" placeholder="Description" onChange={ handleChange} value={datos.description} className={styles.forminput} required ></textarea>
            </div>

            <div className={styles.formdiv}>
            <label className={styles.formlabel}></label>
            <input type='date' onChange={ handleChange}  name="release_date" className={styles.forminput} value={datos.release_date}/>
            </div>

            <div className={styles.formdiv}>
            <label className={styles.formlabel}></label>
            <input onChange={ handleChange}  placeholder="Rating" name="rating" className={styles.forminput} value={datos.rating} required/>
            </div>

            <div className={styles.formdiv}>
            <label className={styles.formlabel} ></label>
            <input onChange={ handleChange} placeholder="Plataformas" name="platforms" className={styles.forminput} value={datos.platforms} required/>
            </div>

            {/* <input name="genres" type='text' onChange={handleChange} value={datos.genres}  /> */}
            <div className={styles.selectdiv}>
            <label className={styles.formlabel}>genres</label>
            <select multiple value={datos.add}  className={styles.selec2} onChange={selectionGenres}>
                <option disabled >Selecciona los géneros </option>
                {genres.map(genre => <option value={genre.id} required>{genre.nombre}</option> )}
               
            </select>
          
            <div>{datos.selection.map(p => <span> {p} </span>) } </div>
            </div>

        <button type="submit" >Add</button>
        <Link to={`/home`}><button >Regresar</button></Link>
      </form>
  </div>
  )
   
};


export default Form;