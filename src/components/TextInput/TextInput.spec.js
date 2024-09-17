import React from "react";
import TextInput from "./TextInput";
import { render, fireEvent, getByTestId } from "@testing-library/react";

describe("TextField component", () => {
  it("should render with default props", () => {
    const { getByLabelText } = render(
      <TextInput
        htmlId="htmlId"
        name="name"
        label="Email"
        type="text"
        required={false}
        placeholder="Enter a name"
        value=""
      />
    );
    const input = getByLabelText("Email");

    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveClass("form-control");
    expect(input).toHaveValue("");
  });

  it("should call onChange when the input value changes", () => {
    const mockOnChange = jest.fn();
    const { getByTestId, rerender } = render(
      <TextInput
        htmlId="htmlId"
        name="name"
        label="Email"
        type="text"
        required={false}
        onChange={mockOnChange}
        placeholder="Enter a name"
        value=""
      />
    );
    const input = getByTestId("textField");

    fireEvent.change(input, { target: { value: "new value" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);

    rerender(
      <TextInput
        htmlId="htmlId"
        name="name"
        label="Email"
        type="text"
        required={false}
        placeholder="Enter a name"
        value="new value"
      />
    );

    expect(input).toHaveValue("new value");
  });

  it("should render with custom controlState and feedbackState classes", () => {
    const { getByTestId, rerender } = render(
      <TextInput
        htmlId="htmlId"
        name="name"
        label="Email"
        type="text"
        required={false}
        placeholder="Enter a name"
        feedback="This is an invalid name"
        isSuccess={false}
      />
    );
    const input = getByTestId("textField");
    const feedback = getByTestId("feedbackField");

    expect(input).toHaveClass("form-control");
    expect(feedback).toHaveTextContent("This is an invalid name");
  });
});
