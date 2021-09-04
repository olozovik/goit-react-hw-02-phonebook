import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

function ContactLIst({
  contacts,
  filteredContacts,
  filterValue,
  deleteContact,
}) {
  const renderContacts =
    filteredContacts.length > 0 ? filteredContacts : contacts;

  if (
    (!filterValue && contacts.length > 0) ||
    (filterValue && filteredContacts.length > 0)
  ) {
    return (
      <List>
        {renderContacts.map(contact => {
          return (
            <li key={contact.name}>
              {contact.name}: {contact.number}
              <button
                type={'button'}
                data-name={contact.name}
                onClick={deleteContact}
              >
                Delete
              </button>
            </li>
          );
        })}
      </List>
    );
  } else if (filterValue) {
    return <p>There are no contacts with this name.</p>;
  } else {
    return <p>There are no contacts here.</p>;
  }
}

export { ContactLIst };

ContactLIst.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  filteredContacts: PropTypes.array,
  filterValue: PropTypes.string,
  deleteContact: PropTypes.func,
};
