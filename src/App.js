import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  let handleClick = async () => {
    try {
      let languages = await axios.get(
        `http://moos1234-001-site1.ctempurl.com//api/Language/Index`
      );
      setData(languages.data.items);
      console.log(languages);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Button className="p-5 pt-2 pb-2" onClick={handleClick}>
        Get Data
      </Button>
    </div>
  );
}

export default App;
