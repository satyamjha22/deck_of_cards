import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import Card from "../Card";

describe("Card", () => {
  it("should render the correct amount of incomplete tasks", () => {
    render(<Card suit="♣︎" value="10" />);
    const divElement1 = screen.getByTestId("card-black-tl");
    const divElement1Value = within(divElement1).getByText("10");
    const divElement1Suit = within(divElement1).getByText("♣︎");
    expect(divElement1Value).toBeInTheDocument();
    expect(divElement1Suit).toBeInTheDocument();
  });

  it("should render the correct amount of incomplete tasks", () => {
    render(<Card suit="♦︎" value="10" />);
    const divElement2 = screen.getByTestId("card-red-tl");
    const divElement2Value = within(divElement2).getByText("10");
    const divElement2Suit = within(divElement2).getByText("♦︎");
    expect(divElement2Value).toBeInTheDocument();
    expect(divElement2Suit).toBeInTheDocument();
  });
});
