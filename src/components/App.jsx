
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Filtering from 'components/Filtering/Filtering';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import css from './App.module.css';

export const App = () => {

  const [contacts, setContacts] = useState(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(stringifiedContacts);

    return parsedContacts;
  });

      const [filter, setFilter] = useState('');


      useEffect(() => {
        const stringifiedContacts = JSON.stringify(contacts);
        localStorage.setItem('contacts', stringifiedContacts);
      }, [contacts]);


const handleAddProduct = contactData => {
      const isExist = contacts.some(
        contact => contact.nameUser === contactData.nameUser
      );
  
      if (isExist) {
        alert(`${contactData.nameUser} is already in contacts.`);
        return
      }
  
      const finalNames = {
        ...contactData,
        id: nanoid(),
      };
      setContacts([...contacts, finalNames]);
  
    };

    const handleDeleteContacts = contactId => {
      setContacts(contacts.filter(contact => contact.id !== contactId));
    };
    
  const getFilteredContacts = (value) => {
 
    if (value) {
      const filterWord = value;
      return contacts.filter(contact =>
        contact.nameUser.toLowerCase().includes(filterWord.toLowerCase()))
      
    } 
    return contacts
  }

  const handleInputFilter = event => {
    const value = event.target.value;
    setFilter(value);
  };
 
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm handleAddProduct={handleAddProduct}/>
        <h2>Contacts</h2>
        <Filtering filter={filter} handleInputFilter={handleInputFilter}/>
        <ContactList contacts={getFilteredContacts(filter)} handleDeleteContacts={handleDeleteContacts}/>
     </div>
    );
  }


