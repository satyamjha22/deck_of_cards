import { render, screen, fireEvent } from "@testing-library/react";
import { within } from "@testing-library/dom";
import CardDeck from "../CardDeck";

describe("CardDeck", () => {
  it("renders deck of card application", () => {
    render(<CardDeck />);
    const someDiv = screen.getByTestId("deck-component");
    const childButton = within(someDiv).getByRole("button");
    fireEvent.click(childButton);
  });

  it("renders remove card from the deck", () => {
    render(<CardDeck />);
    const removCardDiv = screen.getByTestId("draw-card");
    const removeCardButton = within(removCardDiv).getByRole("button");
    fireEvent.click(removeCardButton);
  });

  it("sort remove card from the deck", () => {
    render(<CardDeck />);
    const sortCardDiv = screen.getByTestId("sort-drawn-card");
    const sortCardButton = within(sortCardDiv).getByRole("button");
    fireEvent.click(sortCardButton);
  });

  it("Number of remove card from the deck", () => {
    render(<CardDeck />);
    const inputElement = screen.getByPlaceholderText(/Number of card drawn/i);
    fireEvent.change(inputElement, { target: { value: "5" } });
  });
});
