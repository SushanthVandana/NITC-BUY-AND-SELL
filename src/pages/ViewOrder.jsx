import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import ItemCard from "../components/Card";

const OrdersPage = () => {
  const firebase = useFirebase();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (firebase.isLoggedIn)
      firebase
        .fetchMyItems(firebase.user.uid)
        ?.then((items) => setItems(items.docs));
  }, [firebase]);

  console.log(items);

  if (!firebase.isLoggedIn) return <h1 style={{
    color: "green",
    fontSize: "32px",
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }}>Please login to view orders</h1>;

  return (
    <div>
      {items.map((item) => (
        <ItemCard
          link={`/items/orders/${item.id}`}
          key={item.id}
          id={item.id}
          {...item.data()}
        />
      ))}
    </div>
  );
};

export default OrdersPage;
