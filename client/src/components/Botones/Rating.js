import React from 'react';
import {useDispatch,} from "react-redux";
import { rate} from "../../actions/index";

/*Seleccion multiple para filtrar, desde el redux se dispara la acción de crear un
estado global por el filtro que escoja el usuario */

export function Filter() {
    
    let rating= [1,2,3,4,5]
    const dispatch = useDispatch();
    const [datos, setDatos] = React.useState(" ");

    const handleChange = (event) => {
        setDatos(event.target.value);
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        dispatch(rate(datos));
 
    }

    return (
        <>
            <form onSubmit={enviarDatos}>
                <label > Rating
                    {/* <input name="genres" type='text' onChange={handleChange} value={datos.genres}  /> */}

                    <select selected name="drawfs" id="drawfs" onChange={handleChange} >
                        
                        <option disabled value={datos} >Escoge el rating </option>
                        {rating.map(genre => <option value={genre}>{genre}</option> )}
                    
                    </select>

                </label>

                <input type="Submit" value="Submit"/>

            </form>
        </>
        
    )

};

export default Filter;