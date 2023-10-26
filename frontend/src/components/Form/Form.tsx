import axios from "axios";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { REQUEST_ADDRESS } from "../../additional/requestAddress";
import Button from "../Button/Button";

interface IData {
  [firstName: string]: string;
  lastName: string;
  email: string;
  password: string;
  role: "user" | "admin";
}

const Form: FC = (): JSX.Element => {
  const navigate = useNavigate();

  const data: IData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "user",
  };

  const [registered, setRegistered] = useState(false);
  const [state, setState] = useState(data);
  const [cookies, setCookies] = useState<any[] | null>(null);

  async function formSubmit(e: SyntheticEvent) {
    e.preventDefault();
    try {
      await axios
        .post(
          `${REQUEST_ADDRESS}/users${!registered ? "/sign_in" : ""}`,
          { user: state },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              withCredentials: true,
            },
          }
        )
        .then(({ data }): any => {
          if (data.code === 200) {
            localStorage.setItem("token", data.payload);
            navigate("/items");
          }
          return data;
        });
    } catch (err) {
      console.log(err);
    }
    reset();
  }

  function getFormFields(e: SyntheticEvent) {
    const { name, value, checked } = e.target as HTMLInputElement;
    if (name === "role") {
      if (!checked) setState({ ...state, role: "user" });
      setState({ ...state, role: "admin" });
    } else {
      setState({ ...state, [name]: value });
    }
  }

  function reset() {
    setState({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      role: "user",
    });
  }

  useEffect(() => {}, [cookies]);

  return (
    <>
      <form name="infoForm" onSubmit={formSubmit}>
        {registered && (
          <>
            <input
              name="firstName"
              value={state.firstName}
              type="text"
              placeholder="First name"
              onChange={getFormFields}
            />
            <input
              name="lastName"
              value={state.lastName}
              type="text"
              placeholder="Last name"
              onChange={getFormFields}
            />
          </>
        )}

        <input
          name="email"
          value={state.email}
          type="text"
          placeholder="Email"
          onChange={getFormFields}
        />
        <input
          name="password"
          value={state.password}
          type="password"
          placeholder="Password"
          onChange={getFormFields}
        />
        <label>
          <input
            type="checkbox"
            name="role"
            // checked={false}
            onChange={getFormFields}
          />
          Are you admin?
        </label>

        {!registered ? (
          <p>Don't have an account?</p>
        ) : (
          <p>Already have an account? </p>
        )}
        <Button
          onClick={() => setRegistered(!registered)}
          type="button"
          text={!registered ? "Go to registration" : "Go to login"}
        />
        <hr />
        <Button type="submit" text={registered ? `Register` : `Login`} />
      </form>
      <hr />
    </>
  );
};

export default Form;
