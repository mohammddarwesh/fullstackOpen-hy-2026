import { useState } from "react";
function getRandomArbitrary(min, max) {
  const random = Math.trunc(Math.random() * (max - min) + min);
  console.log(random);
  return random;
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [voteArray, setVoteArray] = useState(Array(anecdotes.length).fill(0));

  const highestVote = Math.max(...voteArray);
  const highestVoteIndex = voteArray.indexOf(highestVote);
  // console.log(
  //   "highestVote",
  //   highestVote,
  //   "index",
  //   voteArray.indexOf(highestVote),
  // );

  const onSetNextAnecdotes = () => {
    const x = getRandomArbitrary(0, anecdotes.length);
    console.log("random", x);
    setSelected(x);
  };
  const onSetVoteArray = () => {
    console.log("voteArray", voteArray);
    console.log("selected", selected);
    setVoteArray(
      voteArray.map((element, index) => {
        console.log("IsSelected?", index === selected ? element : false);
        console.log(element, index);
        return index === selected ? element + 1 : element;
      }),
    );
  };
  console.log("voteArray", voteArray);

  return (
    <>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {voteArray[selected]} votes</p>
        <div className="">
          <button onClick={() => onSetVoteArray()}>vote</button>
          <button
            // style={{ display: "block" }}
            onClick={() => onSetNextAnecdotes()}
          >
            {" "}
            next anecdotes{" "}
          </button>
        </div>
      </div>
      {highestVote > 0 ? (
        <div className="">
          <h2>Anecdotes with most votes</h2>
          <div>
            <p>{anecdotes[highestVoteIndex]}</p>
            <p>has {highestVote} votes</p>
          </div>
        </div>
      ) : (
        "No votes yet"
      )}
    </>
  );
};

export default App;
