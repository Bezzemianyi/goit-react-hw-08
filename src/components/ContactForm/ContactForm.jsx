import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
const ContactForm = ({ contact, setContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    const newContact = {
      ...values,
      id: crypto.randomUUID(),
    };
    console.log(values);
    setContact((prev) => [...prev, newContact]);
    actions.resetForm();
  };
  const re = /^\d{3}-\d{2}-\d{2}$/;
  const onlyLatters = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/;
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
    <div>
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
