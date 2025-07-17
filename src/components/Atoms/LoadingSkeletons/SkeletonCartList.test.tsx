import { render, screen } from "@testing-library/react";
import { SkeletonCartList } from "./SkeletonCartList";

describe("Atoms > SkeletonCartList", () => {
  it("renders two SkeletonCart components", () => {
    // Arrange
    render(<SkeletonCartList />);
    // Act
    const skeletons = screen.getAllByTestId("skeleton-cart");
    // Assert
    expect(skeletons).toHaveLength(2);
  });
});
