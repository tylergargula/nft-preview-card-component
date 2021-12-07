import React from "react";
import { ReactComponent as EtheriumIcon } from "/src/images/icon-ethereum.svg";
import { ReactComponent as ClockIcon } from "/src/images/icon-clock.svg";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={require("/src/image-equilibrium.jpg")}
        alt="crypto_img"
      />
      <h1>Equilibrium #3429</h1>
      <p>Our Equilibrium collection promotes balance and calm.</p>
      <ul>
        <li>
          <EtheriumIcon /> 0.041 ETH
        </li>
        <li>
          <ClockIcon /> 3 days left
        </li>
      </ul>
      {/* <hr /> */}

      <div className="bottom">
        <img
          className="circle-img"
          src={require("/src/images/image-avatar.png")}
          alt="avatar_jules_wyvern"
        />
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
