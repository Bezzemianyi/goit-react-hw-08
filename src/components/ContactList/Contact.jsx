import s from "./ContactList.module.css";
const Contact = ({ name, number }) => {
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
        <button className={s.btnDel} type="button">
          Delete{" "}
        </button>
      </li>
    </div>
  );
};

export default Contact;
