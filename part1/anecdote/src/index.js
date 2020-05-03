import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [state, setState] = useState({
    votes: new Array(anecdotes.length - 1).fill(0),
    maxSoFar: 0,
    selected: 0,
  });

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const getMaxSoFar = (votes) => {
    const max = Math.max(...votes);
    const idx = votes.findIndex((v) => v >= max);
    return idx;
  };

  return (
    <>
      <div>{props.anecdotes[state.selected]}</div>
      <div>has {state.votes[state.selected]} votes</div>
      <div>
        <button
          onClick={() => {
            const updatedVotes = [...state.votes];
            updatedVotes[state.selected] += 1;
            const idx = getMaxSoFar(updatedVotes);
            setState({ ...state, votes: updatedVotes, maxSoFar: idx });
          }}
        >
          vote
        </button>
        <button
          onClick={() => {
            const randomInt = getRandomInt(anecdotes.length - 1);
            setState({
              ...state,
              selected: randomInt,
            });
          }}
        >
          next anecdote
        </button>
      </div>

      <h2>anecdotes with most votes</h2>
      <div>{props.anecdotes[state.maxSoFar]}</div>
      <div>has {state.votes[state.maxSoFar]} votes</div>
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
