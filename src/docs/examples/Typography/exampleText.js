import React from "react";
import Typography from "ps-react/Typography";

/** With a custom message: */
export default function ExampleButton() {
  return (
    <div>
      <Typography className="normal" text="This is normal text" />
      <Typography className="small" text="This is small text" />
      <Typography className="lead" text="This is lead text" />
      <Typography className="bold" text="This is bold text" />
      <Typography
        className="normal font-weight-bold"
        text="This is normal bold text"
      />
      <Typography
        className="small font-weight-bold"
        text="This is small bold text"
      />
      <Typography
        className="lead font-weight-light"
        text="This is lead light text"
      />
      <Typography
        className="lead font-italic"
        text="This is lead italic  text"
      />
      <Typography
        className="lead font-weight-bold"
        text="This is lead bold  text"
      />
    </div>
  );
}
