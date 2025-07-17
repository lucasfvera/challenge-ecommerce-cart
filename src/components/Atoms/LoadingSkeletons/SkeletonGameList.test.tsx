import { render, screen } from "@testing-library/react";
import { SkeletonGameList } from "./SkeletonGameList";

describe("SkeletonGameList", () => {
  it("renders three LoadingSkeletonCard components", () => {
    // Arrange
    render(<SkeletonGameList />);
    // Act
    const skeletons = screen.getAllByTestId("loading-skeleton-card");
    // Assert
    expect(skeletons).toHaveLength(3);
  });
});
