function Fruits({ fruits }) {
  return (
    <div>
      <ul>
        {fruits != null ? (
          fruits.map((fruit) => <li key={fruit.id}>{fruit.name}</li>)
        ) : (
          <li key="no_fruits">No Fruits passed.</li>
        )}
      </ul>
    </div>
  );
}

export default Fruits;
