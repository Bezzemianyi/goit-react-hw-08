import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contact by name</p>
      <input
        name="name"
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
