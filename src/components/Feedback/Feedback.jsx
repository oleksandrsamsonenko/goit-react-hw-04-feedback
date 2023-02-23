import { Component } from 'react';
import css from './Feedback.module.css';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Notification } from './Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = name => {
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const array = Object.values(this.state);
    const total = array.reduce((total, item) => (total += item));
    return total === 0
      ? '0'
      : `${Math.round((this.state.good / total) * 100)}%`;
  }
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const rateLevel = Object.keys(this.state);
    return (
      <div className={css.container}>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            btnNames={rateLevel}
            handleFeedback={this.handleFeedback}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              stats={this.state}
              total={total}
              positivePercentage={positivePercentage}
              rateLevel={rateLevel}
            />
          )}
        </SectionTitle>
      </div>
    );
  }
}

export default Feedback;
