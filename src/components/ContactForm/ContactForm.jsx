import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
// import { addContact } from "../../redux/contacts/contactsOps";
// import { addContact } from "../../redux/contactsSlice";
const ContactForm = () => {
  const initialValues = { name: "", number: "" };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const re = /^\d{3}-\d{3}-\d{4}$/;
  const onlyLatters = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/;

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required("Це поле обов'язкове")
      .min(3, "Мінимум 3 символи")
      .max(50, "Максимум 50 символів")
      .matches(onlyLatters, "Лише літери"),
    number: Yup.string()
      .required("Це поле обов'язкове")
      .min(3, "Мінимум 3 символи")
      .max(50, "Максимум 50 символів")
      .matches(re, "Не правильний формат"),
  });

  return (
    <div className={s.formWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={applySchema}
      >
        {() => (
          <Form className={s.form}>
            <label className={s.inputBox}>
              <p className={s.title}>Name</p>
              <Field className={s.input} name="name" />
            </label>
            <ErrorMessage name="name" />
            <label className={s.inputBox}>
              <p className={s.title}>Number</p>
              <Field className={s.input} name="number" />
            </label>
            <ErrorMessage name="number" />
            <button className={s.btn} type="submit">
              {" "}
              Add contact{" "}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
