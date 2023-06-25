/* eslint-disable react/prop-types */

import Divider from "../images/pattern-divider-desktop.svg";
import Dice from "../images/icon-dice.svg";

const Advice = ({ quote, handleClick }) => {
  const { id = "", advice = "" } = quote;

  return (
    <div className="advice-container">
      <div className="advice-header">Advice #{id}</div>
      <div className="advice-quote">{`"${advice}"`}</div>

      <img className="advice-divider" src={Divider} alt="divider" />
      <div className="advice-dice" onClick={handleClick}>
        <img src={Dice} alt="dice" />
      </div>
    </div>
  );
};

export default Advice;
