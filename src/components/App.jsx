import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import { ContainerDiv } from './App.styled';

const App = () => {
  return (
    <ContainerDiv>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </ContainerDiv>
  );
};

export default App;
