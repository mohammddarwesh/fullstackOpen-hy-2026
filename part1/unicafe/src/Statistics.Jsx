import React from "react";

const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  console.log("Statistics",good, bad, neutral);
  return (
    <div className="">
      <h3>statistics</h3>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad} </p>
      <p>average {all > 0 && (good - bad) / all}</p>
      <p>positive {all > 0 && (good / all) * 100}% </p>
    </div>
  );
};

export default Statistics;
