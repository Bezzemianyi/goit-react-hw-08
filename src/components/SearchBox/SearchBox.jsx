const SearchBox = ({ setContact, contact }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        name="name"
        type="text"
        onChange={(e) => setContact(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
