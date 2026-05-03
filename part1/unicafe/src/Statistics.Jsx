import StatisticLine from "./StatisticLine";

const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return (
      <>
        <h3>Statistics</h3>
        <p>NO feedback given</p>
      </>
    );
  }
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  console.log("Statistics", good, bad, neutral);
  return (
    <table className="">
      <thead>
        <tr>
          <th colSpan="2">Statistics</th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text={"good"} value={good} />
        <StatisticLine text={"neutral"} value={neutral} />
        <StatisticLine text={"bad"} value={bad} />
        <StatisticLine text={"all"} value={all} />
        <StatisticLine text={"average"} value={average} />
        <StatisticLine text={"positive"} value={positive + "%"} />
      </tbody>
    </table>
  );
};

export default Statistics;
