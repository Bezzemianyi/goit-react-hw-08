import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import s from "./ContactList.module.css";
const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  return (
    <div className={s.listWrapper}>
      <ul>
        {contacts.map((item) => (
          <Contact key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
