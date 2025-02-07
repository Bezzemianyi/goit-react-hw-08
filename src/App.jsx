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
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contact={contact} setContact={setContact} />
      <SearchBox contact={contact} setFilter={setFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        contact={contact}
        setContact={setContact}
      >
        <Contact />
      </ContactList>
    </div>
  );
};
export default App;
