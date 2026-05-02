import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  console.log(all);
  return (
    <div>
      <h3>Give feedback</h3>
      {/* buttons */}
      <div className="">
        <button onClick={() => setGood((prev) => prev + 1)}>good</button>
        <button onClick={() => setNeutral((prev) => prev + 1)}>neutral</button>
        <button onClick={() => setBad((prev) => prev + 1)}>bad</button>
      </div>
      {/* statistics */}
      <div className="">
        <h3>statistics</h3>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad} </p>
        <p>average {all > 0 &&(good - bad)/ all }</p>
        <p>positive {all > 0 && (good / all) * 100}% </p>
      </div>
    </div>
  );
};

export default App;
