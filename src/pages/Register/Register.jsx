import { Formik, Form, Field } from "formik";
import s from "./Register.module.css";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router-dom";
const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Name:</span>
            <Field className={s.input} name="name" />
          </label>
          <label className={s.label}>
            <span className={s.span}>Email:</span>
            <Field className={s.input} name="email" />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password:</span>
            <Field className={s.input} name="password" type="password" />
          </label>
          <button className={s.button} type="submit">
            Register
          </button>

          <p className={s.p}>
            You already have account ? <Link to="/login">Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
