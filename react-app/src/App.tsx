import ListGroup from './components/ListGroup';

function App() {
  const items = ['list-1', 'list-2'];

  return (
    <div>
      <ListGroup
        items={items}
        heading={'List Items'}
        onSelectedItem={s => {
          console.info(s);
        }}
      />
    </div>
  );
}

export default App;
