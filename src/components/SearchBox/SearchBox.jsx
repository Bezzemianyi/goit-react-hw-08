const SearchBox = ({ setFilter }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input
        name="name"
        type="text"
        onChange={(e) => setFilter(e.target.value.toLowerCase())}
      />
    </div>
  );
};

export default SearchBox;
