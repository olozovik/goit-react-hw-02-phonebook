import PropTypes from 'prop-types';

function ContactLIst({ contacts, filteredContacts, filterValue }) {
  const renderContacts =
    filteredContacts.length > 0 ? filteredContacts : contacts;

  if (!filterValue || (filterValue && filteredContacts.length > 0)) {
    return (
      <ul>
        {renderContacts.map(contact => {
          return (
            <li key={contact.name}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return <p>Error!!!!</p>;
  }
}

export { ContactLIst };

ContactLIst.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};
