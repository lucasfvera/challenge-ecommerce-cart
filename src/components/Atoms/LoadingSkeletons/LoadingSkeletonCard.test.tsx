import { render, screen } from "@testing-library/react";
import { LoadingSkeletonCard } from "./LoadingSkeletonCard";

describe("LoadingSkeletonCard", () => {
  it("renders the skeleton card root element", () => {
    // Arrange
    render(<LoadingSkeletonCard />);
    // Act
    const root = screen.getByTestId("loading-skeleton-card");
    // Assert
    expect(root).toBeInTheDocument();
  });
});
