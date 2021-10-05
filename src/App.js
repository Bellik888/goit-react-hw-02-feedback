import { Component } from 'react';
import './App.css';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Statistic } from './components/Statistic/Statistic';
import { Notification } from './components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  chooseGoodFeedback = () => {
    this.setState(prev => ({ good: prev.good + 1 }));
  };
  chooseNeutralFeedback = () => {
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
  };
  chooseBadFeedback = () => {
    this.setState(prev => ({ bad: prev.bad + 1 }));
  };
  countTotalFeedback = () => {
    let { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    let { good, neutral, bad } = this.state;
    let positivePercentage = Math.floor((good * 100) / (good + neutral + bad));
    return positivePercentage;
  };

  render() {
    let { good, neutral, bad } = this.state;
    let {
      countTotalFeedback,
      chooseGoodFeedback,
      chooseNeutralFeedback,
      chooseBadFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <div className="App">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            chooseGoodFeedback={chooseGoodFeedback}
            chooseNeutralFeedback={chooseNeutralFeedback}
            chooseBadFeedback={chooseBadFeedback}
          />
        </Section>

        {countTotalFeedback() > 0 ? (
          <Section title={'Statistics'}>
            <Statistic
              good={good}
              bad={bad}
              neutral={neutral}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'No feedback given'} />
        )}
      </div>
    );
  }
}

export default App;
