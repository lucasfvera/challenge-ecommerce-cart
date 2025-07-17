import { render, screen } from "@testing-library/react";
import { SkeletonCart } from "./SkeletonCart";

describe("SkeletonCart", () => {
  it("renders the skeleton cart root element", () => {
    // Arrange
    render(<SkeletonCart />);
    // Act
    const root = screen.getByTestId("skeleton-cart");
    // Assert
    expect(root).toBeInTheDocument();
  });
});
