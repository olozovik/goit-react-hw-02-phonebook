import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Filter({ filterValue, findContacts }) {
  const inputId = uuidv4();
  return (
    <label htmlFor="inputId">
      Find contacts by name
      <input
        id={inputId}
        type="text"
        value={filterValue}
        onChange={findContacts}
      />
    </label>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
  findContacts: PropTypes.func,
};

export { Filter };
