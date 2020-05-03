import React from 'react';
import Statistic from './statistic';

const Statistics = ({ good, neutral, bad }) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    const all = good + neutral + bad;
    const average = (good + neutral + bad) / 3;
    const positive = all === 0 ? 0 : (good / all) * 100;
    return (
      <>
        <h1>statistics</h1>
        <table>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={positive + '%'} />
        </table>
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <div>no feedback given</div>
      </>
    );
  }
};

export default Statistics;
