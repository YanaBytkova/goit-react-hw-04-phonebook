
import css from './ContactList.module.css';
import { ContactItem } from 'components/ContactItem/ContactItem';
const ContactList = ({contacts, handleDeleteContacts}) => {

  return (
      <div>
        
        <ul className={css.list}>
          
            <ContactItem contacts={contacts} handleDeleteContacts={handleDeleteContacts}/>
          
        </ul>
      </div>
  )

}
export default ContactList;
    
    



