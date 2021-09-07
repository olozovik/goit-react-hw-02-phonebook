import { Component } from 'react';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
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
    const newContactsList = this.state.contacts.filter(contact => {
      return contact.name !== e.target.dataset.name;
    });
    this.setState({ contacts: newContactsList });
  };

  findContacts = e => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, findContacts, deleteContact } = this;

    let contactsToRender = contacts;
    if (filter) {
      contactsToRender = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <Filter filterValue={filter} findContacts={findContacts} />
        <ContactList
          contacts={contactsToRender}
          filterValue={filter}
          deleteContact={deleteContact}
        />
        {filter && contactsToRender.length === 0 && (
          <p>There are no contacts with this name.</p>
        )}
        {!filter && contactsToRender.length === 0 && (
          <p>There are no contacts here.</p>
        )}
      </Wrapper>
    );
  }
}

export { App };
