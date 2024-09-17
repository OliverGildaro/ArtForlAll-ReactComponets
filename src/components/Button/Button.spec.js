import React from "react";
import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";

describe("Button component", () => {
  it("Test click event", () => {
    const mockCallBack = jest.fn();

    const { getByTestId } = render(
      <Button
        htmlId="htmlId"
        label="Primary"
        onClick={mockCallBack}
        type="button"
        className="btn-primary"
      />
    );
    const button = getByTestId("button");
    fireEvent.click(button);

    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });

  it("should render with default props", () => {
    const { getByTestId } = render(
      <Button
        htmlId="htmlId"
        label="Primary"
        type="button"
        className="btn-primary"
      />
    );
    const button = getByTestId("button");
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass("btn");
    expect(button).toHaveTextContent("Primary");
  });

  it("should render with custom props", () => {
    const props = {
      id: "test-id",
      label: "Click Me",
      type: "submit",
      className: "btn-primary",
    };

    const { getByTestId } = render(<Button {...props} />);
    const button = getByTestId("button");

    expect(button).toHaveAttribute("id", "test-id");
    expect(button).toHaveTextContent("Click Me");
    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveClass("btn btn-primary");
  });

  it("should not throw an error if onClick is not provided", () => {
    const { getByTestId } = render(
      <Button
        htmlId="htmlId"
        label="Primary"
        type="button"
        className="btn-primary"
      />
    );
    const button = getByTestId("button");
    expect(() => fireEvent.click(button)).not.toThrow();
  });
});
