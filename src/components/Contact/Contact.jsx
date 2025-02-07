import s from "../ContactList/ContactList.module.css";
const Contact = ({ name, number, id, handleDelete }) => {
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
            handleDelete(id);
          }}
        >
          Delete{" "}
        </button>
      </li>
    </div>
  );
};

export default Contact;
