import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { ContainerDiv } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchCotacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchCotacts());
  }, [dispatch]);

  return (
    <ContainerDiv>
      <h1>Phonebook</h1>
      <ContactForm />

      <div>
        <h2>Contacts</h2>
        {isLoading ? (
          <p>Loading Contacts.....</p>
        ) : (
          <div>
            {items.length > 0 && (
              <div>
                <Filter />
                <ContactList />
              </div>
            )}
          </div>
        )}
        {error && <p>{error}</p>}
      </div>
    </ContainerDiv>
  );
};

export default App;
