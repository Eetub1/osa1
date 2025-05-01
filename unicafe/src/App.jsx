import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodPoint = () => setGood(good + 1)
  const setNeutralPoint = () => setNeutral(neutral + 1)
  const setBadPoint = () => setBad(bad + 1)

  return (
    <div>
      <Header text={"give feedback"}/>
      <Button onClick={setGoodPoint} text="good"/>
      <Button onClick={setNeutralPoint} text="neutral"/>
      <Button onClick={setBadPoint} text="bad"/>
      <Header text={"statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good * 1 + bad * -1)/(good + neutral + bad)
  const positive = (good/(good + neutral + bad) * 100) + " %"

  if (all === 0) return (
    <div>
      <p>No feedback given</p>
    </div>
  )

  return (
  <div>
    <table>
      <tbody>
      <StatisticLine text={"good"} value={good}/>
      <StatisticLine text={"neutral"} value={neutral}/>
      <StatisticLine text={"bad"} value={bad}/>
      <StatisticLine text={"all"} value={all}/>
      <StatisticLine text={"average"} value={average}/>
      <StatisticLine text={"positive"} value={positive}/>
      </tbody>
    </table>
  </div>)
}

const Header = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}

const Button = ({onClick, text}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>
      {text}
    </td>

    <td>
      {value}
    </td>
    </tr>
  )
}

export default App