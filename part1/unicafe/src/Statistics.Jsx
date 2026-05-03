import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100 + "%";
  console.log("Statistics", good, bad, neutral);
  return (
    <div className="">
      <h3>statistics</h3>
      {all > 0 ? (
        <>
          <StatisticLine text={"good"} value={good} />
          <StatisticLine text={"neutral"} value={neutral} />
          <StatisticLine text={"bad"} value={bad} />
          <StatisticLine text={"all"} value={all} />
          <StatisticLine text={"average"} value={all > 0 ? average : 0} />
          <StatisticLine text={"positive"} value={all > 0 ? positive : "0%"} />
        </>
      ) : (
        <p>NO feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
