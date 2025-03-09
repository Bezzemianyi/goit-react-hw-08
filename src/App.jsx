import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefresh } from "./redux/auth/selectors";
import "./App.css";
import { Suspense, lazy } from "react";
import "./assets/sprite.svg";

const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Home = lazy(() => import("./pages/Home/Home"));
const RegistrationForm = lazy(() =>
  import("./pages/RegistrationForm/RegistrationForm")
);
const LoginForm = lazy(() => import("./pages/LoginForm/LoginForm"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const Layout = lazy(() => import("./Layout"));
const PrivateRoute = lazy(() => import("./pages/PrivateRoute"));
const RestrictedRoute = lazy(() => import("./pages/RestrictedRoute"));

const App = () => {
  const isRefreshing = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div>
      <Suspense fallback={<>loading...</>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/contacts"
            element={
              <Layout>
                <PrivateRoute component={Contacts} redirectTo="/login" />{" "}
              </Layout>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />

          <Route
            path="/register"
            element={
              <Layout>
                <RestrictedRoute component={RegistrationForm} redirectTo="/" />
              </Layout>
            }
          />
          <Route
            path="/login"
            element={
              <Layout>
                <RestrictedRoute component={LoginForm} redirectTo="/" />
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
