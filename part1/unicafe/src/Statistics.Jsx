import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  console.log("Statistics", good, bad, neutral);
  return (
    <div className="">
      <h3>statistics</h3>
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <StatisticLine text={"all"} value={good + neutral + bad} />
      <StatisticLine text={"average"} value={all > 0 && (good - bad) / all} />
      <StatisticLine
        text={"positive"}
        value={(all > 0 && (good / all) * 100) + "%"}
      />
    </div>
  );
};

export default Statistics;
