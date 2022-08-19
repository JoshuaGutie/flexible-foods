import "./css/calculator.css";
import calorieCover from "./img/calorieCover.png"
import FindCalculate from "./FindCalculate";



function Calculator() {
  return (
    <div className="calculatorContainer">
      <div className="coverContainer">
      <div className="info">
          <h1>Find Your</h1>
          <h2 className="madeEasy">Calorie Limit</h2>
          <p>
          Use the calorie calculator to estimate the number of daily calories your body needs to maintain your current weight.{" "}
          </p>
        </div>
        <img src={calorieCover} alt='calculator' className="coverc"/>
      </div>
      <FindCalculate />
    </div>
  );
}

export default Calculator;
