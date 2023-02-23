import { useState } from 'react';
import css from './Feedback.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Notification } from './Notification/Notification';

const Feedback = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const handleFeedback = name => {
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };
  const countPositiveFeedbackPercentage = () => {
    const array = Object.values(state);
    const total = array.reduce((total, item) => (total += item));
    return total === 0 ? '0' : `${Math.round((state.good / total) * 100)}%`;
  };

  const total = state.good + state.bad + state.neutral;
  const rateLevel = Object.keys(state);

  return (
    <div className={css.container}>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions btnNames={rateLevel} handleFeedback={handleFeedback} />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            stats={state}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
            rateLevel={rateLevel}
          />
        )}
      </SectionTitle>
    </div>
  );
};

export default Feedback;
