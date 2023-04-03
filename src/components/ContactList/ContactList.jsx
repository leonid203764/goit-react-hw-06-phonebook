import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selector';
import { getFilter } from 'redux/filter/filter-selector';

import css from '../ContactList/ContactList.module.css';

import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizeFilter = filter.trim().toLowerCase();

    console.log(contacts);

    const result = contacts.filter(contact =>
      contact.name.trim().toLowerCase().includes(normalizeFilter)
    );
    return result;
  };

  const visibleContacts = getVisibleContacts();
  
  return (
    <>
      {visibleContacts.length === 0 && (
        <p className={css.text}>There is no such contact</p>
      )}
      <ul className={css.list}>
        {visibleContacts.map(({ id, name, number }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </>
  );
};
export default ContactList;
