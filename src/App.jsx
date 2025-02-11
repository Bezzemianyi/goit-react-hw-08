import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import userData from "./userData.json";

const App = () => {
  const [contact, setContact] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("contact"));
    if (savedData?.length) {
      return savedData;
    }
    return [];
  });
  const [filter, setFilter] = useState("");

  const filteredContacts = contact.filter((item) =>
    item.name.toLowerCase().includes(filter)
  );
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
  }, [contact]);
  const addContact = (newContact) => {
    setContact((prev) => [...prev, newContact]);
  };

  const deleteContact = (id) => {
    setContact((prev) => prev.filter((contact) => contact.id !== id));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox setFilter={setFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      >
        <Contact />
      </ContactList>
    </div>
  );
};
export default App;
