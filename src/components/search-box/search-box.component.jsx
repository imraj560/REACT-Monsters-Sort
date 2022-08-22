
import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => (

            <input

             type='search' 
             placeholder={placeholder}
             className={`search-box ${className}`} 
             onChange={onChangeHandler}

             />

    

);

export default SearchBox;