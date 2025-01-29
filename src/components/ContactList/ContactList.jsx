import userData from "../../userData.json";
import Contact from "./Contact";
const ContactList = () => {
  return (
    <div>
      <ul>
        {userData.map((item) => (
          <Contact key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
