import { render, screen } from "@testing-library/react";
import { CartGamesList } from "./CartGamesList";
import { Game } from "@/utils/endpoint";

jest.mock("@/components/Atoms/LoadingSkeletons/SkeletonCartList", () => ({
  SkeletonCartList: () => (
    <div data-testid="skeleton-cart-list">Loading...</div>
  ),
}));
jest.mock("@/components/Molecules/CartGameItem/CartGameItem", () => ({
  CartGameItem: ({ game }: { game: Game }) => (
    <div data-testid="cart-game-item">{game.name}</div>
  ),
}));

describe("Organisms > CartGamesList", () => {
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

  it("renders loading skeleton when games is null", () => {
    // Arrange
    render(<CartGamesList games={null} />);
    // Act
    const skeleton = screen.getByTestId("skeleton-cart-list");
    // Assert
    expect(skeleton).toBeInTheDocument();
  });

  it("renders empty state when games is empty", () => {
    // Arrange
    render(<CartGamesList games={[]} />);
    // Act
    const empty = screen.getByText(/cart empty/i);
    // Assert
    expect(empty).toBeInTheDocument();
  });

  it("renders a list of cart game items", () => {
    // Arrange
    render(<CartGamesList games={games} />);
    // Act
    const items = screen.getAllByTestId("cart-game-item");
    // Assert
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Game 1");
    expect(items[1]).toHaveTextContent("Game 2");
  });
});
