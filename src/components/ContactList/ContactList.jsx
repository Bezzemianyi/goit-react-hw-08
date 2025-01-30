import userData from "../../userData.json";
import Contact from "./Contact";
const ContactList = ({ contact }) => {
  return (
    <div>
      <ul>
        {contact.map((item) => (
          <Contact key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
