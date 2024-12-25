function Hello({ name, array, message }) {
  return (
    <h1>
      Hello {name} and here is your {message} and array is{" "}
      {array.map((val) => (
        <li key={val}>value is {val}</li>
      ))}
    </h1>
  );
}

export default Hello;
