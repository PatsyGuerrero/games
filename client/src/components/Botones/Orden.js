import React from "react";
import {useDispatch} from "react-redux";
import {orden} from "../../actions/index";



/* Boton que ordena el estado actual, creando otro estado desde el redux */

export default function Orden () {

      const [checked, setChecked] = React.useState(true);

      let dispatch = useDispatch();

      const enviarcheck = () => {
            setChecked(!checked);
            dispatch(orden(checked))
  
        }

    return (
      <>
        <div >
            <input type="checkbox"
                  onChange={enviarcheck} 
                />
          <label for="one"> Ordenar </label>
        </div>
      </>
    );
      
};