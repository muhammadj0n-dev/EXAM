import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import React from "react";
import App from "../App";
import { Products, Login ,Status} from "@pages";
import MiniDrawer from "../components/pages/ui/mainmui/driwer";
import Singleproduct from "../components/pages/singleproduct";

const index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" elemetn={<App />}>
        <Route index element={<Login />} />
        <Route path="main/*" element={<MiniDrawer />}>
          <Route index element={<Products/>} />
          <Route path="status" element={<Status/>} />
          <Route path="single-product/:id" element={<Singleproduct />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default index;
