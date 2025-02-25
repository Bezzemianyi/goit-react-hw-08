import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.filter);
  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <ul>
        {filteredData.map((item) => (
          <Contact key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
