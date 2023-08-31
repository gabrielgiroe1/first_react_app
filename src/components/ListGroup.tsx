import React,{useState} from 'react';

//{items: [], heading: string}
interface Props{
  items: string[];
  heading: string;
  //(item: string)=>
  onSelectItem: (item: string)=> void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
  //Hook
  const [selectedItem, setSelectedIndex] = useState(-1);

  //event handler
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={()=>{setSelectedIndex(index);
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
