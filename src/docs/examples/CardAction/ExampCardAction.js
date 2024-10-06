import React from "react";
import CardAction from "ps-react/CardForm";
import Button from "ps-react/Button";

/** CardAction example */
export default function ExampleCardForm() {
  return (
    <CardAction
      htmlId="card1"
      title="Basic event informations"
      titleClass="h4"
      description="Please provide a detailed information about this or that"
    >
      <Button
        htmlId="htmlId3"
        label="secondary"
        type="button"
        onClick={() => {}}
        className="btn-secondary btn-sm btn-block"
      />
      <Button
        htmlId="htmlId3"
        label="primary"
        type="button"
        onClick={() => {}}
        className="btn-primary btn-sm btn-block"
      />
    </CardAction>
  );
}
