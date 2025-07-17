import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CartGameItem } from "./CartGameItem";
import { Game } from "@/utils/endpoint";
import { useCartStorage } from "@/hooks/useCartStorage";

// Mock the useCartStorage hook
jest.mock("@/hooks/useCartStorage");

const mockGame: Game = {
  id: "1",
  genre: "Action",
  image: "/game-images/cyberpunk277g",
  name: "Cyberpunk 2077",
  description: "An open-world, action-adventure story set in Night City.",
  price: 590.99,
  isNew: true,
};

describe("Molecules > CartGameItem", () => {
  const mockRemoveGameFromCart = jest.fn();

  beforeEach(() => {
    (useCartStorage as jest.Mock).mockImplementation(() => ({
      removeGameFromCart: mockRemoveGameFromCart,
    }));
  });

  afterEach(() => {
    mockRemoveGameFromCart.mockClear();
  });

  it("renders game information correctly", () => {
    // Arrange
    render(<CartGameItem game={mockGame} />);

    // Act
    const gameName = screen.getByText(mockGame.name);
    const gameGenre = screen.getByText(mockGame.genre);
    const gameDescription = screen.getByText(mockGame.description);
    const gamePrice = screen.getByText(`$ ${mockGame.price}`);
    const newTag = screen.getByText("New");
    const gameImage = screen.getByAltText(/game photo/i);

    // Assert
    expect(gameName).toBeInTheDocument();
    expect(gameGenre).toBeInTheDocument();
    expect(gameDescription).toBeInTheDocument();
    expect(gamePrice).toBeInTheDocument();
    expect(newTag).toBeInTheDocument();
    expect(gameImage).toBeInTheDocument();
  });

  it('does not render "New tag when game is not new', () => {
    // Arrange
    const nonNewGame: Game = { ...mockGame, isNew: false };
    render(<CartGameItem game={nonNewGame} />);

    // Act
    const newTag = screen.queryByText("New");

    // Assert
    expect(newTag).not.toBeInTheDocument();
  });

  it("renders remove button with correct accessibility attributes", () => {
    // Arrange
    render(<CartGameItem game={mockGame} />);

    // Act
    const removeButton = screen.getByRole("button", {
      name: /remove item from cart/i,
    });

    // Assert
    expect(removeButton).toBeInTheDocument();
  });

  it("calls proper action when remove button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<CartGameItem game={mockGame} />);
    const removeButton = screen.getByRole("button", {
      name: /remove item from cart/i,
    });

    // Act
    await user.click(removeButton);

    // Assert
    expect(mockRemoveGameFromCart).toHaveBeenCalledWith(mockGame.id);
  });
});
