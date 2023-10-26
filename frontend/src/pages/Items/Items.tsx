import { useState, useEffect, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { REQUEST_ADDRESS } from "../../additional/requestAddress";
import axios from "axios";
import Button from "../../components/Button/Button";

const Items = (): JSX.Element => {
  const [arr, setArr] = useState([]);
  const [role, setRole] = useState("");
  const [orderMenuVisibility, setOrderMenuVisibility] = useState(false);

  const initial = {
    id: null,
    amount: 0,
  };
  const [data, setData] = useState(initial);

  const navigate = useNavigate();

  function onInputChange(e: SyntheticEvent) {
    let { parentNode, value }: any = e.target as HTMLInputElement;
    try {
      setData((prevState) => ({
        ...prevState,
        amount: Number(value),
        id: parentNode?.id,
      }));
      return data;
    } catch (err) {
      throw new Error("incorrect value");
    }
  }
  async function createOrder(e: SyntheticEvent) {
    try {
      axios
        .post(
          `${REQUEST_ADDRESS}/orders`,
          { data },
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              withCredentials: true,
              Authenticate: `Bearer` + " " + localStorage.getItem("token"),
            },
          }
        )
        .then((response) => console.log("id", response));
      return;
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getItems();
    async function getItems() {
      try {
        axios
          .get(`${REQUEST_ADDRESS}/items`)
          .then(({ data: { payload } }: any) => {
            console.log(payload);
            setArr(payload);
          });
      } catch (err) {
        console.log(err);
      }
    }

    // getUserRole();
    // async function getUserRole() {
    //   try {
    //     axios
    //       .get(`${REQUEST_ADDRESS}/users/sign_in`)
    //       .then((el: any) => console.log("get role", el));
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
  }, []);

  return (
    <div>
      <Button
        text="Show your's orders"
        type="button"
        onClick={() => navigate("/orders")}
      />
      <ul>
        {arr.length &&
          arr.map(
            ({ id, item_name, item_description, item_price }: any): any => {
              return (
                <li key={id} id={id}>
                  <h2>{item_name}</h2>
                  <p>{item_description}</p>
                  <p>
                    <span>{item_price}</span> $
                  </p>
                  <Button
                    text="buy"
                    type="button"
                    onClick={() => setOrderMenuVisibility(!orderMenuVisibility)}
                  />
                  {orderMenuVisibility && (
                    <>
                      <input
                        type="text"
                        placeholder="quantity"
                        onChange={onInputChange}
                      />
                      <button type="button" onClick={createOrder}>
                        order
                      </button>
                    </>
                  )}
                  <Button
                    text="edit"
                    type="button"
                    onClick={() => navigate(`/${id}`)}
                  />
                  <hr />
                  {/* {role === "admin" && <Button text="edit" type="button" />} */}
                </li>
              );
            }
          )}
      </ul>
    </div>
  );
};

export default Items;
function setArr(payload: any) {
  throw new Error("Function not implemented.");
}
