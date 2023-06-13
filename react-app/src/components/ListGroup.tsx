function ListGroup() {
  let items = ['list-1', 'list-2'];
  items = [];

  return (
    <>
      <h1> List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map(item => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
