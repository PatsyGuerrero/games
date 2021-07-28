import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {  useEffect  } from 'react';
import { getAllGenres, filter} from "../../actions/index";

/*Selección múltiple para filtrar por género  y envia un action que crea un nuevo
estado con los juegos que se están renderizando en el estado global*/

export function Filter(props) {
    
    const genres = useSelector((state) => state.genres);

    const dispatch = useDispatch();

    useEffect (() => {
      dispatch(getAllGenres());
    }, [dispatch]);

    const [datos, setDatos] = React.useState(" ");


    const handleChange = (event) => {
        setDatos(event.target.value);
    }

    // console.log('datos', datos)
    const enviarDatos = (event) => {
        // alert('An essay was submitted: ' + datos);
        event.preventDefault();
        // console.log('datosenviar', datos)
        dispatch(filter(datos));
 
      }

    //   const selectionGenres = (e) => {
    //     setDatos({
    //         ...datos,
    //         ["selection"]: [...datos.selection, e.target.value]
    //     })
    // }

    return (
        <>
            <form onSubmit={enviarDatos}>
                <label >Filter
                    {/* <input name="genres" type='text' onChange={handleChange} value={datos.genres}  /> */}

                    <select selected name="drawfs" id="drawfs"   onChange={handleChange} >
                        <option disabled value={datos} >Selecciona los géneros </option>
                        {genres.map(genre => <option value={genre.nombre}>{genre.nombre}</option> )}
                    
                    </select>
                </label>
                <input type="Submit" value="Submit"/>
            </form>
        </>
        
    )

};

export default Filter;
