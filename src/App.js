import React, {useState, useEffect} from 'react';
import shortid from 'shortid';
import './App.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

    useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const changeFilter = (evt) => {
    setFilter(evt.currentTarget.value);
  };

  const addContact = ({ name, number }) => {
    const foundNames = contacts.map(contact => contact.name.toLocaleLowerCase());
    const lowerName = name.toLocaleLowerCase();
    if(foundNames.includes(lowerName)){
     return alert(`${name} is already in contacts`);
    }
      const contact = {
        id: shortid.generate(),
        name,
        number,
      };

    setContacts(prevContacts => ([contact, ...prevContacts]));
  };

  const deleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = () => {
    const lowerCasedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(lowerCasedFilter))
  };

  return (
    <div>
      <h1 className="text">Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className="text">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts()} onDeleteContact={deleteContact} />
    </div>
  )

}

export default App;