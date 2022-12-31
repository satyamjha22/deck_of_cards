import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "react-bootstrap/Button";

const CardDeck = () => {
  const [deck, setcardDeck] = useState([]);
  const [drawnDeck, setDrawnDeck] = useState([]);
  const [noOfcard, setInputField] = useState("");

  const suits = [
    { icon: "♣︎", name: "Club", suitRank: 1 },
    { icon: "♠︎", name: "Spade", suitRank: 2 },
    { icon: "♥︎", name: "Heart", suitRank: 3 },
    { icon: "♦︎", name: "Diamond", suitRank: 4 },
  ];
  const values = [
    { value: "A", rank: 1 },
    { value: "K", rank: 2 },
    { value: "Q", rank: 3 },
    { value: "J", rank: 4 },
    { value: "10", rank: 5 },
    { value: "9", rank: 6 },
    { value: "8", rank: 7 },
    { value: "7", rank: 8 },
    { value: "6", rank: 9 },
    { value: "5", rank: 10 },
    { value: "4", rank: 11 },
    { value: "3", rank: 12 },
    { value: "2", rank: 13 },
  ];
  useEffect(() => {
    let deck = [];
    let card = [];
    for (let x = 0; x < suits.length; x++) {
      for (let y = 0; y < values.length; y++) {
        card = {
          suitIcon: suits[x].icon,
          suit: suits[x].name,
          suitRank: suits[x].suitRank,
          val: values[y].value,
          rank: values[y].rank,
        };
        deck.push(card);
      }
    }
    setcardDeck([...deck]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffleCards = () => {
    let counter = deck.length;
    let t;
    let i;
    while (counter) {
      i = Math.floor(Math.random() * counter--);
      t = deck[counter];
      deck[counter] = deck[i];
      deck[i] = t;
    }
    setcardDeck([...deck]);
  };

  const drawCards = () => {
    let noOfcardDrawn = 1;
    if (noOfcard > 1) {
      noOfcardDrawn = noOfcard;
    }
    const drawnCard = deck.splice(0, noOfcardDrawn);
    let newDrawnCard = [...drawnDeck, ...drawnCard];
    setDrawnDeck([...newDrawnCard]);
    setInputField("");
  };
  const sortDrawCards = () => {
    const sortedCards = drawnDeck.sort((a, b) => {
      // First, sort by suit
      if (a.suitRank < b.suitRank) return -1;
      if (a.suitRank > b.suitRank) return 1;

      // If the suits are the same, sort by value
      if (a.rank < b.rank) return -1;
      if (a.rank > b.rank) return 1;

      // If the values are the same, the order doesn't matter
      return 0;
    });
    setDrawnDeck([...sortedCards]);
  };

  return (
    <div className="container">
      <div className="row">
        <div data-testid="deck-component" className="col-sm-6">
          <h1>Deck of Card</h1>
          <Button onClick={shuffleCards}>Shuffle</Button>
          <div className="deck">
            {deck.map(function (card) {
              return (
                <Card
                  key={`${card.val} ${card.suitIcon}`}
                  suit={card.suitIcon}
                  value={card.val}
                />
              );
            })}
          </div>
        </div>
        <div className="col-sm-6 other">
          <h1>Draw Cards</h1>
          <div data-testid="draw-card" className="draw-card">
            <Button onClick={drawCards}>Draw Cards</Button>
          </div>
          <input
            placeholder="Number of card drawn"
            value={noOfcard}
            onChange={(event) => setInputField(event.target.value)}
            className="no-of-card"
            type="text"
          />
          <div data-testid="sort-drawn-card" className="sort-draw-card">
            <Button onClick={sortDrawCards}>Sort</Button>
          </div>
          <div className="deck">
            {drawnDeck.map(function (card) {
              return (
                <Card
                  key={`${card.val} ${card.suitIcon} drawn`}
                  suit={card.suitIcon}
                  value={card.val}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDeck;
