import {useState} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

 export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
   

   const options = ['good', 'neutral', 'bad']
   
   const onFeedback = (option) => {
    switch (option) {
      case 'good':
        setGood(good + 1)
        break;
       case 'neutral':
        setNeutral(neutral + 1)
        break;
       case 'bad':
        setBad(bad + 1)
        break;
    
      default:
        break;
    }

   }
   
  const countTotalFeedback = () =>{
    let total = good + neutral + bad
    return total
  };

 const countPositiveFeedbackPercentage = () => Math.round((good / countTotalFeedback()) * 100)
  

    return (
      <div style={{
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onFeedback={onFeedback}
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
              total={countTotalFeedback()}
              percentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  };

