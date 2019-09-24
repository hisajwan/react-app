import React, { useState, useEffect } from "react";

function Fortnite() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  //   const fetchItems = async() => {

  //   }
  async function fetchItems() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    console.log(items);
    setItems(items);
  }
  return (
    <React.Fragment>
      <div className="p-3">Fortnite</div>
    </React.Fragment>
  );
}

export default Fortnite;
