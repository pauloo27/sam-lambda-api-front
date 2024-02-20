import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ListMenu } from "./List";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";

jest.mock("../../api/api.js");

const queryClient = new QueryClient();

describe("List Menu", () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              id: "1",
              name: "X Burger",
              price: "5.99",
              ingredients: [
                {
                  ingredientId: "1",
                  menuItemId: "1",
                  amount: 2,
                  ingredient: { id: "1", name: "Bread", availableAmount: 99 },
                },
                {
                  ingredientId: "2",
                  menuItemId: "1",
                  amount: 1,
                  ingredient: { id: "2", name: "Tomato", availableAmount: 12 },
                },
              ],
            },
            {
              id: "4",
              name: "Tiple Tomato",
              price: "3",
              ingredients: [
                {
                  ingredientId: "2",
                  menuItemId: "4",
                  amount: 3,
                  ingredient: { id: "2", name: "Tomato", availableAmount: 12 },
                },
              ],
            },
            {
              id: "8",
              name: "Bread Only",
              price: "1.99",
              ingredients: [
                {
                  ingredientId: "1",
                  menuItemId: "8",
                  amount: 1,
                  ingredient: { id: "1", name: "Bread", availableAmount: 99 },
                },
              ],
            },
          ]),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("renders menu list", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ListMenu />
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(await screen.findByText("X Burger")).toBeInTheDocument();
    expect(await screen.findByText("Tiple Tomato")).toBeInTheDocument();
    expect(await screen.findByText("Bread Only")).toBeInTheDocument();
  });
});
