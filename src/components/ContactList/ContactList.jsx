import ContactListItem from './ContactListItem';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { remContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilter);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(remContact(id));
  };

  const filteredName = () => {
    return contacts.filter(contact =>
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
          number={contact.number}
          onClick={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
