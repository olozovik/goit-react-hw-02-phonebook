import { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactLIst } from './components/ContactList/ContactList';
import { Filter } from './components/Filter/Filter';
import { Wrapper } from 'components/Wrapper/Wrapper';

class App extends Component {
  state = {
    contacts: [
      { name: 'John Walsh', id: '5', number: '555-55-54' },
      { name: 'Sofie Terner', id: '6', number: '555-55-55' },
    ],
    filter: '',
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

  deleteContact = e => {
    let index = null;
    this.state.contacts.forEach((contact, idx) => {
      if (contact.name === e.target.dataset.name) {
        index = idx;
      }
    });
    this.setState(prevState => {
      const newContactsList = [...this.state.contacts];
      newContactsList.splice(index, 1);
      return { contacts: newContactsList };
    });
  };

  findContacts = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  render() {
    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          findContacts={this.findContacts}
        />
        <ContactLIst
          contacts={this.state.contacts}
          // filteredContacts={this.filteredContacts}
          filterValue={this.state.filter}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

export { App };
