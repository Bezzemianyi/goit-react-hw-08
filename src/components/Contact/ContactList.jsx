import Contact from "./Contact";
const ContactList = ({ filteredContacts, setContact, contact }) => {
  const handleDelete = (id) => {
    const newData = contact.filter((item) => item.id !== id);
    setContact(newData);
  };
  return (
    <div>
      <ul>
        {filteredContacts.map((item) => (
          <Contact key={item.id} {...item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
