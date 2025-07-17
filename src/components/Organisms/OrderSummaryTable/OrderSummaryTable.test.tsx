import { render, screen } from "@testing-library/react";
import { OrderSummaryTable } from "./OrderSummaryTable";
import { Game } from "@/utils/endpoint";

describe("Organisms > OrderSummaryTable", () => {
  const games: Game[] = [
    {
      id: "1",
      genre: "Action",
      image: "",
      name: "Game 1",
      description: "",
      price: 10,
      isNew: false,
    },
    {
      id: "2",
      genre: "RPG",
      image: "",
      name: "Game 2",
      description: "",
      price: 20,
      isNew: true,
    },
  ];

  it("renders loading state when games is null", () => {
    // Arrange
    render(<OrderSummaryTable games={null} />);
    // Act
    const loading = screen.getByTestId("skeleton-order-summary-table");
    // Assert
    expect(loading).toBeInTheDocument();
  });

  it("renders order summary and items", () => {
    // Arrange
    render(<OrderSummaryTable games={games} />);
    // Act
    const summary = screen.getByText(/order summary/i);
    const itemCount = screen.getByText("2 items");
    const game1 = screen.getByText("Game 1");
    const game2 = screen.getByText("Game 2");
    const price1 = screen.getByText("$ 10");
    const price2 = screen.getByText("$ 20");
    const total = screen.getByText("$ 30");
    // Assert
    expect(summary).toBeInTheDocument();
    expect(itemCount).toBeInTheDocument();
    expect(game1).toBeInTheDocument();
    expect(game2).toBeInTheDocument();
    expect(price1).toBeInTheDocument();
    expect(price2).toBeInTheDocument();
    expect(total).toBeInTheDocument();
  });

  it("renders checkout button", () => {
    // Arrange
    render(<OrderSummaryTable games={games} />);
    // Act
    const checkoutButton = screen.getByRole("button", { name: /checkout/i });
    // Assert
    expect(checkoutButton).toBeInTheDocument();
  });
});
