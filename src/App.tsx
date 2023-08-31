import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  // let items = [
  //   "New York",
  //   "San Francisco",
  //   "Los Angeles",
  //   "Chicago",
  //   "Houston",
  //   "Philadelphia",
  //   "Phoenix",
  // ];
  // const name = "Gabriel";
  // const handleSelectItem = (item: string)=> {
  //   console.log(item);
  // }

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> */}
      {/* <Alert>
        hello <snap>world</snap>
      </Alert> */}
      {alertVisible && <Alert onClose={() =>setAlertVisibility(false)} >My alert</Alert>}
      <Button color="secondary" onClick={()=> setAlertVisibility(true)}>Click Me</Button>
    </div>
  );
}

export default App;
