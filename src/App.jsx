import Contact from "./components/ContactList/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState } from "react";
import userData from "./userData.json";

const App = () => {
  const [contact, setContact] = useState(userData);
  const [filter, setFilter] = useState("");

  const filteredContacts = (name) => {
    const newData = contact.filter((item) => item.name.toLowerCase() !== name);
    setContact(newData);
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox contact={contact} setContact={setContact} />
      <ContactList contact={contact}>
        <Contact />
      </ContactList>
    </div>
  );
};
export default App;
