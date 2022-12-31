import React from "react";
import "./App.scss";
import CardDeck from "./deckOfCards/CardDeck";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div data-testid="deckof-card-app" className="App">
      <CardDeck />
    </div>
  );
};

export default App;
