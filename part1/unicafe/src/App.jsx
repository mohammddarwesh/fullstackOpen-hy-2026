import { useState } from "react";
import Statistics from "./Statistics.Jsx";

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
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
