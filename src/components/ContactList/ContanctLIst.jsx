import PropTypes from 'prop-types';

function ContactLIst({
  contacts,
  filteredContacts,
  filterValue,
  deleteContact,
}) {
  const renderContacts =
    filteredContacts.length > 0 ? filteredContacts : contacts;

  if (!filterValue || (filterValue && filteredContacts.length > 0)) {
    return (
      <ul>
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
      </ul>
    );
  } else {
    return <p>There is not a contact with this name.</p>;
  }
}

export { ContactLIst };

ContactLIst.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};
