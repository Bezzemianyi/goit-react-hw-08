import Contact from "../Contact/Contact";
const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <div>
      <ul>
        {filteredContacts.map((item) => (
          <Contact key={item.id} {...item} deleteContact={deleteContact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
