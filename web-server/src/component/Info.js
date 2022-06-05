import "../../node_modules/bootstrap/dist/css/bootstrap.css";

import react, { useState } from "react";

const Info = (props) => {
   const [message, setMessage] = useState("");
   const handleMessegaChange = (event) => { 
   setMessage(event.target.value)
   }
  return (
    <div className="card w-100 gap-3 m-2">
      <div className="card-body">
        <div className="row">
          <div className="col">
            <label htmlFor="name">name:</label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name :"
              aria-label="Name :"
              value={props.name}
            />
          </div>
          <div className="col">
            <label htmlFor="token">token:</label>
            <input
              id="token"
              type="text"
              className="form-control"
              placeholder="Token :"
              aria-label="Token :"
              value={props.token}
            />
          </div>
        </div>
        <div className="mb-3 gap-3">
          <label htmlFor="message" className="form-label">
            message :
          </label>
          <textarea className="form-control" id="message" onChange={handleMessegaChange} rows="3"></textarea>
        </div>
        <form action={`../../../post/${props.token}/${message}`} method="post" className="row g-3">
          <div className=" text-center">
            <div className="card-body">
              <button type="submit" className="btn btn-success">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Info;
// <form action="../../post" method="post" className="form">
        //   <button type="submit">Connected?</button>
        // </form>