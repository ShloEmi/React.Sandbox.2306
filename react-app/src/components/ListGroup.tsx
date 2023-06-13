function ListGroup() {
  const items = ['list-1', 'list-2'];

  return (
    <>
      <h1> List</h1>
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
