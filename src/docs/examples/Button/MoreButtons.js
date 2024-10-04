import React from "react";
import Button from "ps-react/Button";
/** With a custom message: */
export default function MoreButtons() {
  function hadleClick(e) {}
  return (
    <div>
      <Button
        htmlId="htmlId"
        label="Primary"
        type="button"
        onClick={hadleClick}
        className="btn-primary btn-lg btn-block"
      />
      <Button
        htmlId="htmlId3"
        label="Success"
        type="button"
        onClick={hadleClick}
        className="btn-secondary btn-sm btn-block"
      />
    </div>
  );
}
