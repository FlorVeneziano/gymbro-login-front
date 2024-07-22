import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import Layout from "../layout/LayoutLng";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
