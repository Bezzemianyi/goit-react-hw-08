import Contact from "./components/Contact/Contact";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import userData from "./userData.json";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList>
        <Contact />
      </ContactList>
    </div>
  );
};
export default App;
