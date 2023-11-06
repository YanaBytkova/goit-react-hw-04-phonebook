
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filtering } from 'components/Filtering/Filtering';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import css from './App.module.css';

export class App extends Component {
  state = {
        contacts: [],
        filter: '',
      }
    
      componentDidMount() {
        const stringifiedContacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(stringifiedContacts);
        console.log(parsedContacts);
        if (parsedContacts !== null) {
        this.setState({ contacts: parsedContacts});}
      }
    
      componentDidUpdate(_, prevState) {
        if(prevState.contacts !== this.state.contacts) {
         const stringifiedContacts = JSON.stringify(this.state.contacts);
         localStorage.setItem('contacts', stringifiedContacts);
        }
      }

handleAddProduct = contactData => {
      const isExist = this.state.contacts.some(
        contact => contact.name === contactData.name
      );
  
      if (isExist) {
        alert(`${contactData.name} is already in contacts.`);
        return
      }
  
      const finalNames = {
        ...contactData,
        id: nanoid(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, finalNames],
      }));
  
    };

    handleDeleteContacts = contactId => {
      
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(
          contact => contact.id!== contactId
        ),
      }));
    };
    
     
  getFilteredContacts = (value) => {
 
    const contacts = this.state.contacts;
   
    if (value) {
      const filter = value;
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
      
    } 
    return contacts
  }

  handleInputFilter = event => {
    const value = event.target.value;
    
    this.setState({filter: value});
    
  };
  render() {
    
    const filteredContacts =  this.getFilteredContacts(this.state.filter);
    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm handleAddProduct={this.handleAddProduct}/>
        <h2>Contacts</h2>
        <Filtering filter={this.state.filter} handleInputFilter={this.handleInputFilter}/>
        <ContactList contacts={filteredContacts} handleDeleteContacts={this.handleDeleteContacts}/>
     </div>
    );
  }
}

