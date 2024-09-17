import React from "react";
import Button from "ps-react/Button";
/** With a custom message: */
export default function ExampleButton() {
  function hadleClick(e) {}
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Button
        htmlId="htmlId"
        label="Primary"
        type="button"
        onClick={hadleClick}
        className="btn-primary"
      />
      <Button
        htmlId="htmlId2"
        label="Secondary"
        type="button"
        onClick={hadleClick}
        className="btn-secondary"
      />
      <Button
        htmlId="htmlId3"
        label="Success"
        type="button"
        onClick={hadleClick}
        className="btn-success"
      />
      <Button
        htmlId="htmlId4"
        label="Danger"
        type="button"
        onClick={hadleClick}
        className="btn-danger"
        required={false}
      />
    </div>
  );
}
