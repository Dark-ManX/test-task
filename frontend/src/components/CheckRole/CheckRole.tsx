import { Link, Outlet } from "react-router-dom";
import Form from "../Form";

const CheckRole = (): JSX.Element => {
  return (
    <>
      <Link to="/users">Go to sign-in/sign-up form</Link>
      <hr />
      <Outlet />
    </>
  );
};

export default CheckRole;
