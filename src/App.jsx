import { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [
      { name: 'John', id: 5, number: '555-55-54' },
      { name: 'Sofie', id: 6, number: '555-55-55' },
    ],
  };

  addContact = newContact => {
    this.setState(prevState => {
      const newContacts = [...prevState.contacts];
      newContacts.push(newContact);
      return {
        contacts: newContacts,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
      </div>
    );
  }
}

export { App };
