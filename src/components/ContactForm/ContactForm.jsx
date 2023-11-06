
import React, { useState } from 'react';

import css from './ContactForm.module.css';

const ContactForm = ({ handleAddProduct }) => {

   const [nameUser, setName] = useState('');
   const [number, setNumber] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const contactData = {
      nameUser,
      number
    };
    
    handleAddProduct(contactData);
    form.reset();
  };

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name; 
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

 
    return (
        
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.formLabel}>
          <p className={css.labelText}>Name</p>
          <input type="text" name="name" required onChange={handleInputChange}/>
        </label>
        <label className={css.formLabel}>
          <p className={css.labelText}>Number</p>
          <input type="tel" name="number" required onChange={handleInputChange}/>
        </label> <br />
        <button className={css.button} type="submit">Add contact</button>
      </form>
    );
 

}
export default ContactForm;