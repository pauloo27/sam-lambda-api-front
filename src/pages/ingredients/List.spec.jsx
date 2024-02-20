import { render, screen } from "@testing-library/react";
import { ListIngredients } from "./List";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";

jest.mock("../../api/api.js");

const queryClient = new QueryClient();

const mockIngredients = ["Bread", "Tomato", "Hamburger", "Lettuce"];

describe("List Ingredients", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve(
            mockIngredients.map((name, index) => ({
              id: String(index + 1),
              name,
              availableAmount: Math.floor(Math.random() * 100),
            }))
          ),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders ingredients list", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ListIngredients />
      </QueryClientProvider>
    );

    for (const ingredient of mockIngredients) {
      const elem = await screen.findByText(ingredient);
      expect(elem).toBeInTheDocument();
    }
  });
});
