import React from "react";
import Button from "ps-react/Button";
/** With a custom message: */
export default function ExampleDisableButton() {
  function hadleClick(e) {}
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button
        htmlId="htmlId"
        label="Primary"
        type="button"
        onClick={hadleClick}
        className="btn-primary"
        disabled={true}
      />
      <Button
        htmlId="htmlId2"
        label="Secondary"
        type="button"
        onClick={hadleClick}
        className="btn-secondary"
        disabled={true}
      />
      <Button
        htmlId="htmlId3"
        label="Success"
        type="button"
        onClick={hadleClick}
        className="btn-success"
        disabled={true}
      />
      <Button
        htmlId="htmlId4"
        label="Danger"
        type="button"
        onClick={hadleClick}
        className="btn-danger"
        disabled={true}
      />
    </div>
  );
}
