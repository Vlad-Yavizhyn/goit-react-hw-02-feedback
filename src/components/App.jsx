import { Component } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  onLeaveFeedback = ({target: {name}}) => {
this.setState(prevState=>({
  [name]: prevState[name] + 1
}));
  }
  countTotalFeedback = () => {
    const {
      good,
      neutral,
      bad,
    } = this.state
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage = () => {
    const {
      good
    } = this.state
    return Math.round(good/this.countTotalFeedback()*100);
  }

  render() {
    const { good, neutral, bad } = this.state

  const total = this.countTotalFeedback();

  return (
    <div className="App">
      <Section title={"Please leave feedgack"}>
        <FeedbackOptions 
        options={Object.keys(this.state)} 
        onLeaveFeedback={this.onLeaveFeedback}/>
      </Section>  
      <Section title={"Statistics"}>
        {total ?
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        total={total} 
        positivePercentage={this.countTotalFeedback()}/> : <Notification message={"There is no feedback"}/>
  }
        </Section>  
    </div>
  );
}
}

export default App;
