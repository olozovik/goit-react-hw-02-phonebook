import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

function Filter({ inputValue, findContacts }) {
  const inputId = uuidv4();
  return (
    <label htmlFor="inputId">
      Find contacts by name
      <input
        id={inputId}
        type="text"
        value={inputValue}
        onChange={findContacts}
      />
    </label>
  );
}

Filter.propTypes = {
  inputValue: PropTypes.string,
  findContacts: PropTypes.func,
};

export { Filter };
