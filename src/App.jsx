import HelloWorld from "./components/helloworld"
import LearnReact from "./components/learnreact"
import LearnProps from "./components/learnprops"
import LearnEvent from "./components/learnevent"
import LiftingStateup from "./components/learnliftingstateup"
import LearnUseState from "./components/learnusestate"
import CounterApp from "./components/counterapp"
import LearnUseMemo from "./components/learnusememo"

function App() {

  // const getStockPrice = (data) => {
  //   console.log(data)
  // }

  // let price = 800

  return (
    <>
      {/* <HelloWorld />
      <LearnReact />
      <LearnProps stock="Apple" price={price} />
      <LearnEvent /> */}
      {/* <LiftingStateup clickme={getStockPrice} />
      <LearnUseState /> */}
      {/* <CounterApp /> */}
      <LearnUseMemo />

    </>
  )
}

export default App
