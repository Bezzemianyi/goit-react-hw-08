import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contacts/Contacts";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefresh } from "./redux/auth/selectors";
import PrivateRoute from "./pages/PrivateRoute";
import RestrictedRoute from "./pages/RestrictedRoute";
import s from "./App.module.css";
const App = () => {
  const isRefreshing = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? null : (
    <div>
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
          element={<RestrictedRoute components={<Register />} redirectTo="/" />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute components={<Login />} redirectTo="/" />}
        />
      </Routes>
    </div>
  );
};
export default App;
