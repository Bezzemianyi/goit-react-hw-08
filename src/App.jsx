import { Route, Routes } from "react-router-dom";
// import Contacts from "./pages/Contacts/Contacts";
// import Home from "./pages/Home/Home";
// import Register from "./pages/Register/Register";
// import Login from "./pages/Login/Login";
// import NotFound from "./pages/NotFound/NotFound";
// import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefresh } from "./redux/auth/selectors";
// import PrivateRoute from "./pages/PrivateRoute";
// import RestrictedRoute from "./pages/RestrictedRoute";
import "./App.css";
import { Suspense, lazy } from "react";

const Contacts = lazy(() => import("./pages/Contacts/Contacts"));
const Home = lazy(() => import("./pages/Home/Home"));
const Register = lazy(() => import("./pages/Register/Register"));
const Login = lazy(() => import("./pages/Login/Login"));
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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute components={<Register />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={<RestrictedRoute components={<Login />} redirectTo="/" />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
