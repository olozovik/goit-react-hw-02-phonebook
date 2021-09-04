import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

function Filter({ filterValue, findContacts }) {
  const inputId = uuidv4();
  return (
    <Label htmlFor="inputId">
      Find contacts by name
      <input
        id={inputId}
        type="text"
        value={filterValue}
        onChange={findContacts}
      />
    </Label>
  );
}

Filter.propTypes = {
  filterValue: PropTypes.string,
  findContacts: PropTypes.func,
};

export { Filter };
