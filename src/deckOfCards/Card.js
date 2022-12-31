import React from "react";

const Card = (props) => {
  if (props.suit === "♣︎" || props.suit === "♠︎") {
    return (
      <div className="card card-black">
        <div data-testid="card-black-tl" className="card-tl">
          <div className="card-value">{props.value}</div>
          <div className="card-suit">{props.suit}</div>
        </div>
        <div className="card-br">
          <div className="card-value">{props.value}</div>
          <div className="card-suit">{props.suit}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card card-red">
        <div className="card-tl" data-testid="card-red-tl">
          <div className="card-value">{props.value}</div>
          <div className="card-suit">{props.suit}</div>
        </div>
        <div className="card-br">
          <div className="card-value">{props.value}</div>
          <div className="card-suit">{props.suit}</div>
        </div>
      </div>
    );
  }
};

export default Card;
