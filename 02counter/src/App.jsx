import { useState } from "react";
import Banner from "./component/Banner";
import Card from "./component/Card";
import Button from "./component/Button";
import Bookmecard from "./component/Bookmecard";
import "./App.css";
function App() {
  const [cardDiv, setCardDiv] = useState(false);

  return (
    <>
      <Banner />
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div onClick={() => setCardDiv(!cardDiv)}>
        <Button />
      </div>
      {cardDiv && <Bookmecard />}
    </>
  );
}

export default App;
