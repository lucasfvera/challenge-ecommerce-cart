import { render, screen, waitFor, within } from "@testing-library/react";
import { GameCardList } from "./GameCardList";
import { Game } from "@/utils/endpoint";

const games = [
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

const gamesDataResponse = {
  games,
  currentPage: 1,
  totalPages: 1,
  availableFilters: [],
};

const gamesData = Promise.resolve(gamesDataResponse);

jest.mock("@/components/Atoms/LoadingSkeletons/SkeletonGameList", () => ({
  SkeletonGameList: () => (
    <div data-testid="skeleton-game-list">Loading...</div>
  ),
}));
jest.mock("@/components/Molecules/GameCard/GameCard", () => ({
  GameCard: ({ game }: { game: Game }) => (
    <div data-testid="game-card">{game.name}</div>
  ),
}));
jest.mock("@/hooks/useCartStorage", () => ({
  useCartStorage: () => ({
    addGameToCart: jest.fn(),
    removeGameFromCart: jest.fn(),
    isGameInCart: jest.fn(() => false),
  }),
}));
jest.mock("next/navigation", () => ({
  useSearchParams: () => ({ get: jest.fn() }),
}));

jest.mock("react", () => {
  const originalModule = jest.requireActual("react");

  return {
    __esModule: true,
    ...originalModule,
    use: jest.fn(() => gamesDataResponse),
  };
});

describe("Organisms > GameCardList", () => {
  it("renders game cards when data is loaded", async () => {
    // Arrange
    render(<GameCardList gamesData={gamesData} />);
    // Act
    const cards = await screen.findAllByTestId("game-card");
    const cardGameOne = cards.find((el) => el.textContent === games[0].name);
    const cardGameTwo = cards.find((el) => el.textContent === games[1].name);
    // Assert
    expect(cards).toHaveLength(2);
    expect(cardGameOne).toBeInTheDocument();
    expect(cardGameTwo).toBeInTheDocument();
  });
});
