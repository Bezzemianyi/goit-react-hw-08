import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
          </>
        )}
        {user.name && <h3>{user.email}</h3>}
        {isLoggedIn && (
          <button className={s.btn} onClick={() => dispatch(logoutThunk())}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
