import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/ButtonColors";
import { useState } from "react";

function App() {
  //for ListGroup
  let items = ["Tokyo", "San Fracisco", "Paris", "Kuala Lumpur"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //for Alert
  let texts = "Hello World";
  const handleOnClose = () => {
    console.log("close btn is pressed");
    setAlertVisibility(false);
  };

  //for Button
  let btnTexts = "Click Me";
  const btnColor = "primary";
  const handleSelectButton = () => {
    console.log("button is pressed");
    setAlertVisibility(true);
  };

  //relationship between alert and button
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && <Alert onClose={handleOnClose}>{texts}</Alert>}
      <div>
        <Button color={btnColor} onClick={handleSelectButton}>
          {btnTexts}
        </Button>
      </div>
    </div>
  );
}

export default App;
