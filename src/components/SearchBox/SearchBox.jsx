import { useDispatch } from "react-redux";
// import { setFilter } from "../../redux/filters/filtersSlice";
import s from "./SearchBox.module.css";
import { setFilter } from "../../redux/filters/slice";
const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.searchBox}>
      <p>Find contact by name</p>
      <input
        className={s.input}
        name="name"
        type="text"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
