import React from 'react';
import css from './ContactItem.module.css';

export const ContactItem = ({ contacts, handleDeleteContacts}) => (
  
      contacts.map(contact => (
       <li key={contact.id} className={css.item}>
          <span className={css.name}>{contact.name}</span>
          <span className={css.number}>{contact.number}</span>
          <button className={css.button} onClick={() => handleDeleteContacts(contact.id)}
             type="button">Delete</button>
        </li>
  
  
  ))
          
          
);