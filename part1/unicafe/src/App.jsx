import { useState } from "react";
import Statistics from "./Statistics.jsx";
import Button from "./Button.jsx";

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
        <Button onClick={() => setGood((prev) => prev + 1)} text="good" />
        <Button onClick={() => setNeutral((prev) => prev + 1)} text="neutral" />
        <Button onClick={() => setBad((prev) => prev + 1)} text="bad" />
      </div>
      {/* statistics */}
      {all ? (
        <Statistics good={good} bad={bad} neutral={neutral} />
      ) : (
        <p>NO feedback given</p>
      )}
    </div>
  );
};

export default App;
