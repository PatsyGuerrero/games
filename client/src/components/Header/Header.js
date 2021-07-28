import Searchbar from '../Searchbar/Searchbar.js';
import Botones from '../Botones/Botones.js';
import Filter from '../Filter/Filter.js';
import All from '../Botones/All.js';
import Orden from '../Botones/Orden.js';
import Rating from '../Botones/Rating.js';
import User from '../Botones/User.js';
import FormBtn from '../Botones/formBtn.js';

import styles from './Header.module.css';


function Header() {
  return (
    <div className={styles.contheader}>
        <div>
            <Searchbar/>
        </div>
        <div>
            <FormBtn/>
        </div>
        <div>
            <All/>
        </div>
        <div>
            <User/>
        </div>
        
        <div>
            <Botones/>
        </div>
        
        <div>
            <Orden/>
        </div>
        
        <div>
            <Rating/>
        </div>
        <div>
            <Filter/>
        </div>
    </div>
    
  );
}

export default Header;
