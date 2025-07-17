import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Atom > Button", () => {
  it("renders children", () => {
    // Arrange
    const buttonText = "Click me";
    render(<Button>{buttonText}</Button>);
    // Act
    const button = screen.getByRole("button", { name: buttonText });
    // Assert
    expect(button).toBeInTheDocument();
  });

  it("calls the proper action when clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    // Act
    await user.click(button);
    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is set", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    // Arrange
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>
    );
    const button = screen.getByRole("button", { name: "Disabled" });
    // Act
    await user.click(button);
    // Assert
    expect(button).toBeDisabled();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with different variants", () => {
    // Arrange
    render(<Button variant="secondary">Secondary</Button>);
    // Act
    const button = screen.getByRole("button", { name: "Secondary" });
    // Assert
    expect(button).toBeInTheDocument();
  });
});
