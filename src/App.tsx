import Message from "./Message";

function App() {
  const name = "Gabriel";
  if (name) return <div> Hello {name}</div>;
  return (
    <div>
      {" "}
      <Message></Message>
    </div>
  );
}

export default App;
