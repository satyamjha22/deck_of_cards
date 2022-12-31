import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders deck of card application", () => {
    render(<App />);
    const divElement = screen.getByTestId(/deckof-card-app/i);
    expect(divElement).toBeInTheDocument();
  });
});
