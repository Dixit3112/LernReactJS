import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./app/home";
import Form from "./app/form";
import Table from "./app/table";
// import User from './app/user';

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/form",
  //     element: <Form />,
  //   },
  // ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/:id" element={<Form />} />
        <Route path="/table" element={<Table />} />
        {/* <Route path='/user' element={<User />} /> */}
      </Routes>
    </BrowserRouter>

    // <RouterProvider router={router} />
  );
}

export default App;
