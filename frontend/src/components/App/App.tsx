import React, { FC, useState } from "react";
import Users from "../../pages/Users/Users";
import Form from "../Form";
import Items from "../../pages/Items/Items";
import Orders from "../../pages/Orders/Orders";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  function procceedCookies(id: any): any {
    console.log("app", id);
  }
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users" element={<Form />} />
      <Route path="/items" element={<Items />}>
        <Route path="/items/edit/:id" element={<p>nothing yet</p>} />
      </Route>
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default App;
