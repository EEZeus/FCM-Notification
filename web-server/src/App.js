import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

import { useEffect, useState } from "react";

import Info from "./component/Info";
import logo from "./logo.svg";

function App() {
  const [tokens, setTokens] = useState({});

  const Request = async () => {
    const response = await fetch(
      "https://cloud-messaging-c4b11-default-rtdb.firebaseio.com/.json"
    );
    const data = await response.json();
    setTokens(data);
  };

  let names = [...Object.values(tokens)];
  let values = [...Object.keys(tokens)];

  return (
    <div className="d-grid gap-1">
      <div className="container">
        <div className="d-grid gap-6 col-6 mx-auto m-2">
          <button onClick={Request} className="btn btn-primary" type="button">
            Refresh Tokens
          </button>
        </div>
      </div>
      <div className="container">
        {values.map((item) => (
          <Info
            names={names}
            tokens={values}
            key={item}
            token={item}
            name={names[values.indexOf(item)]}
          ></Info>
        ))}
      </div>
    </div>
  );
}
export default App;
