import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GenreFilterDropdown } from "./GenreFilterDropdown";
import { availableFilters } from "@/utils/endpoint";
import { useBuildUrlSearchParam } from "@/hooks/useBuildUrlSearchParam";
import { useSearchParams, useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));

jest.mock("@/hooks/useBuildUrlSearchParam", () => ({
  useBuildUrlSearchParam: jest.fn(),
}));

describe("Molecules > GenreFilterDropdown", () => {
  const mockReplace = jest.fn();
  const mockUrlBuilder = jest.fn(() => "/test-url");
  const mockSearchParams = jest.fn(() => null);

  beforeEach(() => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      replace: mockReplace,
    }));
    (useSearchParams as jest.Mock).mockImplementation(() => ({
      get: mockSearchParams,
    }));
    (useBuildUrlSearchParam as jest.Mock).mockImplementation(() => ({
      urlBuilder: mockUrlBuilder,
    }));
  });

  afterEach(() => {
    mockReplace.mockClear();
    mockUrlBuilder.mockClear();
    mockSearchParams.mockClear();
  });
  it("renders genre label and dropdown", () => {
    // Arrange
    render(<GenreFilterDropdown />);

    // Act
    const genreLabel = screen.getByText("Genre");
    const dropdown = screen.getByRole("combobox");

    // Assert
    expect(genreLabel).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
  });

  it('renders "All" option as default', () => {
    // Arrange
    render(<GenreFilterDropdown />);

    // Act
    const allOption = screen.getByRole("option", { name: "All" });

    // Assert
    expect(allOption).toBeInTheDocument();
    expect(allOption).toHaveValue("all");
  });

  it("renders all available filter options", () => {
    // Arrange
    render(<GenreFilterDropdown />);

    // Act & Assert
    availableFilters.forEach((filter) => {
      const option = screen.getByRole("option", { name: filter });
      expect(option).toBeInTheDocument();
      expect(option).toHaveValue(filter);
    });
  });

  it("has correct default value when no genre is selected", () => {
    // Arrange
    render(<GenreFilterDropdown />);

    // Act
    const dropdown = screen.getByRole("combobox");

    // Assert
    expect(dropdown).toHaveValue("all");
  });

  it("has correct value when genre is populated from the URL params", () => {
    // Arrange
    const mockSearchParams = {
      get: jest.fn(() => "Action"),
    };
    (useSearchParams as jest.Mock).mockImplementation(() => mockSearchParams);
    render(<GenreFilterDropdown />);

    // Act
    const dropdown = screen.getByRole("combobox");

    // Assert
    expect(dropdown).toHaveValue("Action");
  });

  it("calls router replace when dropdown value changes", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<GenreFilterDropdown />);
    const dropdown = screen.getByRole("combobox");

    // Act
    await user.selectOptions(dropdown, "Action");

    // Assert
    expect(mockUrlBuilder).toHaveBeenCalledWith({
      key: "genre",
      value: "Action",
    });
    expect(mockReplace).toHaveBeenCalledWith("/test-url");
  });
});
