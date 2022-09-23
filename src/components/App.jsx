import React from 'react';
// import ReactDOM from "react-dom";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state
    let total = good + neutral + bad
    return total
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state
    return  Math.round((good / this.countTotalFeedback()) * 100)
  };
  
  feedback = state => {
    return Object.keys(state);
  };

  onFeedback = value => {
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            children={this.feedback(this.state)}
            onFeedback={this.onFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good + neutral + bad === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  };
};

export default App;
