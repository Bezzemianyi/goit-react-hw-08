import { useDispatch } from "react-redux";
import s from "../ContactList/ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <li className={s.listItem}>
        <div className="">
          <p>
            <svg className={s.svg} width={20} height={20}>
              <use href="/src/assets/sprite.svg#icon-user"></use>
            </svg>
            {name}
          </p>
          <p>
            <svg className={s.svg} width={20} height={20}>
              <use href="/src/assets/sprite.svg#icon-phone"></use>
            </svg>
            {number}
          </p>
        </div>
        <button
          className={s.btnDel}
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete{" "}
        </button>
      </li>
    </div>
  );
};

export default Contact;
