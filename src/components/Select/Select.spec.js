import React from "react";
import Select from "./Select";
import { render, fireEvent, getByTestId } from "@testing-library/react";

describe("Select component", () => {
  it("should render with default props", () => {
    const { getByTestId } = render(
      <Select
        htmlId="htmlId"
        name="name"
        label="Email"
        required={false}
        placeHolder={"Select an option"}
        value=""
      />
    );
    const select = getByTestId("select");

    expect(select).toBeInTheDocument();
    expect(select).toHaveClass("form-control");
    expect(select).toHaveValue("");
  });

  it("should render with custom props", () => {
    const props = {
      id: "test-id",
      label: "Test Label",
      value: "option1",
      placeHolder: "Select an option",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
      ],
      feedback: "Selection is valid",
      isSuccess: true,
    };

    const { getByTestId, getByText } = render(<Select {...props} />);
    const select = getByTestId("select");
    const option = getByText("Option 1");

    expect(select).toHaveAttribute("id", "test-id");
    expect(select).toHaveValue("option1");
    expect(option).toBeInTheDocument();
    expect(select).toHaveClass("form-control is-valid");
  });

  it("should call onChange when a different option is selected", () => {
    const mockOnChange = jest.fn();
    const { getByTestId } = render(
      <Select
        htmlId="htmlId"
        name="name"
        label="Email"
        required={false}
        onChange={mockOnChange}
        placeHolder={"Select an option"}
        value=""
      />
    );
    const select = getByTestId("select");

    // Simulate change event
    fireEvent.change(select, { target: { value: "option2" } });

    // Expect the onChange handler to be called
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("should apply controlState and feedbackState classes correctly", () => {
    const { getByTestId, getByText } = render(
      <Select
        htmlId="htmlId"
        name="name"
        label="Email"
        required={false}
        placeHolder={"Select an option"}
        feedback="Invalid input"
        isSuccess={false}
      />
    );
    const select = getByTestId("select");
    const feedback = getByText("Invalid input");

    expect(select).toHaveClass("form-control is-invalid");
    expect(feedback).toHaveClass("invalid-feedback");
  });
});
