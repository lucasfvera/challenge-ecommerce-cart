import { render, screen, within } from "@testing-library/react";
import { NavigationBar } from "./NavigationBar";

describe("Molecules > NavigationBar", () => {
  it("renders the navigation bar and its content properly", () => {
    // Arrange
    render(<NavigationBar />);

    // Act
    const navbar = screen.getByRole("navigation");
    const logoText = within(navbar).getByText(/gamershop/i);
    const cartIcon = screen.getByRole("img", { name: /cart icon/i });

    // Assert
    expect(navbar).toBeInTheDocument();
    expect(logoText).toBeInTheDocument();
    expect(cartIcon).toBeInTheDocument();
  });

  it("renders logo as a link to home page", () => {
    // Arrange
    render(<NavigationBar />);

    // Act
    const logoLink = screen.getByRole("link", { name: /gamershop/i });

    // Assert
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders cart icon as a link to cart page", () => {
    // Arrange
    render(<NavigationBar />);

    // Act
    const cartLink = screen.getByRole("link", { name: /cart icon/i });

    // Assert
    expect(cartLink).toHaveAttribute("href", "/cart");
  });
});
