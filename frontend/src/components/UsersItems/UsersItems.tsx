import { useState } from "react";
import { REQUEST_ADDRESS } from "../../additional/requestAddress";
import axios from "axios";

const UsersItems = () => {
  const [id, setId] = useState(null);
  function getUser() {
    axios.get(`${REQUEST_ADDRESS}/`);
  }

  return <div>{!id ? <p>There no items</p> : <ul></ul>}</div>;
};

export default UsersItems;
