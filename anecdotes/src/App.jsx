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
  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));

  const max = vote.reduce((a, b) => Math.max(a, b), 0);
  const maxVote = vote.indexOf(max);

  const handleNext = () => {
    const randIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randIndex);
  };

  const handleVote = (selected) => {
    setVote((prevVotes) =>
      prevVotes.map((votes, index) => (index === selected ? votes + 1 : votes))
    );
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {vote[selected]} votes</div>
      <button onClick={() => handleVote(selected)}>vote</button>
      <button onClick={handleNext}>next anecdote</button>
      <br />
      <br />
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[maxVote]}</p>
      <p>has {max} votes</p>
    </>
  );
};

export default App;
