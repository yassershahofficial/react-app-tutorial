import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Tokyo", "San Fracisco", "Paris", "Kuala Lumpur"];

  //event handler
  const handleClickList = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Cities</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item" onClick={handleClickList}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
