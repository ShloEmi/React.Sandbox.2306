import { useState } from 'react';

interface Props {
  items: string[];
  heading: string;

  onSelectedItem: (item: string) => void;
}

function ListGroup(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1> {props.heading}</h1>
      {props.items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {props.items.map((item, index) => (
          <li
            key={item}
            className={
              index === selectedIndex
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => {
              console.log('[' + index + ']' + item + ' Clicked' + ', event: ');
              setSelectedIndex(index);
              props.onSelectedItem(item);
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
