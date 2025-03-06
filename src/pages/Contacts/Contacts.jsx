// import Contact from "./components/Contact/Contact";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectError, selectLoading } from "../../redux/contacts/contactsSlice";
import Contact from "../../components/Contact/Contact";

const Contacts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ContactList>
          <Contact />
        </ContactList>
      )}
    </div>
  );
};

export default Contacts;
