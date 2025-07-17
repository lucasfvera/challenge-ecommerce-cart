import { render, screen, within } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders footer with proper content", () => {
    // Arrange
    render(<Footer />);

    // Act
    const footer = screen.getByRole("contentinfo");
    const logoImage = within(footer).getByRole("img", {
      name: /apply digital footer logo/i,
    });

    // Assert
    expect(footer).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
  });

  it("renders the logo as a link to home page", () => {
    // Arrange
    render(<Footer />);

    // Act
    const logoLink = screen.getByRole("link");

    // Assert
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
