import { useState, useEffect } from "react";
import { REQUEST_ADDRESS } from "../../additional/requestAddress";
import axios from "axios";

const Orders = (): JSX.Element => {
  const storage = localStorage.getItem("cookies");
  let storageData: { key: string; value: string };

  const [orders, setOrders] = useState([]);

  if (storage) {
    storageData = JSON.parse(storage);
  }

  useEffect(() => {
    getOrders();
    async function getOrders() {
      try {
        axios
          .get(`${REQUEST_ADDRESS}/orders`, {
            headers: {
              "Access-Control-Allow-Origin": "*",
              withCredentials: true,
              Authenticate: `Bearer` + " " + localStorage.getItem("token"),
            },
          })
          .then(({ data: { payload } }: any) => {
            console.log(payload);
            setOrders(payload);
          });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  return (
    <div>
      <h2>Orders page</h2>
      <p>
        You made <span>{orders ? orders.length : 0}</span> purchase
      </p>
      <ul>
        {orders &&
          orders.map(({ id, order_amount, created_at }) => (
            <li key={id}>
              <p>Shipping date: {created_at}</p>
              <p>Amount {order_amount}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Orders;
