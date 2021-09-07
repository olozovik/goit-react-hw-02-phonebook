import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

function ContactList({ contacts, filterValue, deleteContact }) {
  let contactsToRender = contacts;
  if (filterValue) {
    contactsToRender = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  }

  if (filterValue && contactsToRender.length === 0) {
    return <p>There are no contacts with this name.</p>;
  }

  if (!filterValue && contactsToRender.length === 0) {
    return <p>There are no contacts here.</p>;
  }

  return (
    <List>
      {contactsToRender.map(({ name, number }) => {
        return (
          <li key={name}>
            {name}: {number}
            <button type={'button'} data-name={name} onClick={deleteContact}>
              Delete
            </button>
          </li>
        );
      })}
    </List>
  );
}

export { ContactList };

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  filterValue: PropTypes.string,
  deleteContact: PropTypes.func,
};
