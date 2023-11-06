
import { Component } from 'react';
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
export class ContactList extends Component {

  render() {
  
  return (
      <div>
        
        <ul className={css.list}>
          
            <ContactItem contacts={this.props.contacts} handleDeleteContacts={this.props.handleDeleteContacts}/>
          
        </ul>
      </div>
  )
}
}
    
    



