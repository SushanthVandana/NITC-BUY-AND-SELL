import React, { useEffect, useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";

import ItemCard from "../components/Card";
import { useFirebase } from "../context/Firebase";

const HomePage = () => {
  const firebase = useFirebase();

  const [items, setItems] = useState([]);

  useEffect(() => {
    firebase.listAllItems().then((items) => setItems(items.docs));
  }, []);

  return (
    <div className="container mt-5">
      <CardGroup>
        {items.map((item) => (
          <ItemCard
            link={`/item/view/${item.id}`}
            key={item.id}
            id={item.id}
            {...item.data()}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default HomePage;
