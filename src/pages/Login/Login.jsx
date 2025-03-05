import { Formik, Form, Field } from "formik";
import s from "./Login.module.css";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispath(loginThunk(values))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate("/contacts");
      })
      .catch(() => toast.error("Invalid data"));
    options.resetForm();
  };
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span className={s.span}>Email:</span>
            <Field className={s.input} name="email" />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password:</span>
            <Field className={s.input} name="password" type="password" />
          </label>
          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
