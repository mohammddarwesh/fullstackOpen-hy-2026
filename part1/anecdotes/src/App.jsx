import { useState } from "react";

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

  const handleNextAnecdote = () => {
    const x = Math.floor(Math.random() * anecdotes.length);
    setSelected(x);
  };
  const handleVote = () => {
    const voteArrayCopy = [...voteArray];
    voteArrayCopy[selected] += 1;
    setVoteArray(voteArrayCopy);
  };

  return (
    <>
      <div>
        <p>{anecdotes[selected]}</p>
        <p>has {voteArray[selected]} votes</p>
        <div className="">
          <button onClick={handleVote}>vote</button>
          <button
            // style={{ display: "block" }}
            onClick={handleNextAnecdote}
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
        <p>No votes yet</p>
      )}
    </>
  );
};

export default App;
