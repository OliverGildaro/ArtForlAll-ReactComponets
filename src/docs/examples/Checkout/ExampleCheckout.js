import React, { Children, useState } from "react";
import Checkout from "ps-react/Checkout";

function ExampleForm() {
  const [message, setMessage] = useState("");
  function handleSubmit(data) {
    setMessage("Thanks for submitting");
  }
  return (
    <Checkout onSubmit={handleSubmit}>
      {message && <div>{message}</div>}
    </Checkout>
  );
}

export default ExampleForm;
