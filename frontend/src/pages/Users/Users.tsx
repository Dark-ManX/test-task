import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Users = (): JSX.Element => {
  const [state, setstate] = useState(null);

  function handleUserId(id: string) {
    console.log(id);
  }
  return (
    <>
      <Link to="/users">Go to sign-in/sign-up form</Link>
      <hr />
      <Outlet context={handleUserId} />
    </>
  );
};

export default Users;
