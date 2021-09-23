import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => (
    <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
            <ContactListItem
                key={id}
                name={name}
                number={number}
                onDelete={() => onDeleteContact(id)}
            />
        ))}
        
    </ul>
);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;