import { useState } from "react";
//import { MouseEvent } from "react";

//Props = way so sent arguments in React
interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //event handler
  //const handleClickList = (event: MouseEvent) => console.log(event);

  //state hook = [variable, updater function]
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
