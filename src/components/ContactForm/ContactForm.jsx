import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form autoComplete={'off'} onSubmit={this.handleOnSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleOnChange}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            id={this.numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.handleOnChange}
          />
        </label>
        <button type={'submit'}>Add contact</button>
      </form>
    );
  }
}

export { ContactForm };
