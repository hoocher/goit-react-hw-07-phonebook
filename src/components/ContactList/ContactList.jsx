import ContactListItem from './ContactListItem';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);
  const dispatch = useDispatch();

  const delContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredName = () => {
    return contacts.items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
    );
  };

  return (
    <ul>
      {filteredName().map(contact => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.phone}
          onClick={delContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
