import { render, screen } from "@testing-library/react";
import { SkeletonOrderSummaryTable } from "./SkeletonOrderSummaryTable";

describe("Atoms > SkeletonOrderSummaryTable", () => {
  it("renders the skeleton with all main sections", () => {
    // Arrange
    render(<SkeletonOrderSummaryTable />);
    // Act
    const skeleton = screen.getByTestId("skeleton-order-summary-table");

    // Assert
    expect(skeleton).toBeInTheDocument();
  });
});
