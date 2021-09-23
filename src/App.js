import './App.css';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

const App = () => {

  //   useEffect(() => {
    // const contacts = JSON.parse(localStorage.getItem('contacts'));
    // if (contacts) {
    //   setContacts(contacts);
    // }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h1 className="text">Phonebook</h1>
      <ContactForm />
      <h2 className="text">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )

}

export default (App);