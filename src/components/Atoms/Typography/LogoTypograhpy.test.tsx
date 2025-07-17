import { render, screen } from "@testing-library/react";
import { LogoTypography } from "./LogoTypograhpy";

describe("LogoTypography", () => {
  it("renders children text", () => {
    // Arrange
    const text = "Logo Text";
    render(<LogoTypography>{text}</LogoTypography>);
    // Act
    const element = screen.getByText(text);
    // Assert
    expect(element).toBeInTheDocument();
  });
});
