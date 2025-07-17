import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GameCard } from "./GameCard";
import { Game } from "@/utils/endpoint";

const mockGame: Game = {
  id: "1",
  genre: "Action",
  image: "/game-images/cyberpunk277peg",
  name: "Cyberpunk 2077",
  description: "An open-world, action-adventure story set in Night City.",
  price: 5900.99,
  isNew: true,
};

describe("Molecules > GameCard", () => {
  it("renders game information correctly", () => {
    // Arrange
    render(<GameCard game={mockGame} isGameInCart={false} />);

    // Act
    const gameName = screen.getByText(mockGame.name);
    const gameGenre = screen.getByText(mockGame.genre);
    const gamePrice = screen.getByText(`$ ${mockGame.price}`);
    const newTag = screen.getByText("New");
    const gamePhoto = screen.getByAltText(/game photo/i);

    // Assert
    expect(gameName).toBeInTheDocument();
    expect(gameGenre).toBeInTheDocument();
    expect(gamePrice).toBeInTheDocument();
    expect(newTag).toBeInTheDocument();
    expect(gamePhoto).toBeInTheDocument();
  });

  it("does not render the New tag when the game is not new", () => {
    // Arrange
    const nonNewGame: Game = { ...mockGame, isNew: false };
    render(<GameCard game={nonNewGame} isGameInCart={false} />);

    // Act
    const newTag = screen.queryByText("New");

    // Assert
    expect(newTag).not.toBeInTheDocument();
  });

  it('renders "ADD TO CART" label button when game is not in cart', () => {
    // Arrange
    render(<GameCard game={mockGame} isGameInCart={false} />);

    // Act
    const addButton = screen.getByRole("button", { name: /add to cart/i });

    // Assert
    expect(addButton).toBeInTheDocument();
  });

  it('renders "REMOVE" button when game is in cart', () => {
    // Arrange
    render(<GameCard game={mockGame} isGameInCart={true} />);

    // Act
    const removeButton = screen.getByRole("button", { name: /remove/i });

    // Assert
    expect(removeButton).toBeInTheDocument();
  });

  it("calls the proper action when the button is clicked", async () => {
    // Arrange
    const user = userEvent.setup();
    const mockCtaAction = jest.fn();
    render(
      <GameCard
        game={mockGame}
        isGameInCart={false}
        ctaAction={mockCtaAction}
      />
    );

    // Act
    const button = screen.getByRole("button", { name: /add to cart/i });
    await user.click(button);

    // Assert
    expect(mockCtaAction).toHaveBeenCalledTimes(1);
  });
});
