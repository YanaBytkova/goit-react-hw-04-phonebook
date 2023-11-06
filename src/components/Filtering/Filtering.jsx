import React from 'react';

import css from './Filtering.module.css';

export const Filtering = ({filter, handleInputFilter}) => {
  
    return (
        
        <div>
            <p className={css.labelText}>Find contacts by name</p>
            <input type="text" value={filter}  onChange={handleInputFilter}/>
        </div>
          
       
    );

}