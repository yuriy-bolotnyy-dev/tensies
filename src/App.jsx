import React from 'react'
import Die from './components/Die'
import ReactConfetti from 'react-confetti'
import '../style.css'

import { nanoid } from 'nanoid'
// import Confetti from 'react-confetti/dist/types/Confetti'

  const App = () => {

    const randonNum = () => (Math.floor(Math.random() * 7))

    const randomArray = () => (Array.from({length: 10}, () => randonNum()));

    const [dies, setDies] = React.useState(
      // State Lazy init, by using an arrow function
      () => randomArray().map(el => ({id: nanoid(), value:el, isHeld: false})))

    const [tenzies, setTenzies] = React.useState(false)

    console.log("dies: ", dies)
    console.log("tenzies: ", tenzies)

    React.useEffect(() => {
      console.log(`effect called`)
      // console.log(`are Held: ${dies.filter(die => die.isHeld).length}`)
      // console.log("all are held: ", dies.every(die => die.isHeld))
      // console.log("all are equal: ", dies.every(die => die.value === dies[0].value))
      
      // setTenzies(
      //   dies.every(die => die.isHeld) && 
      //   dies.every(die => die.value === dies[0].value)
      //   )

      dies.every(die => die.isHeld) && 
      dies.every(die => die.value === dies[0].value) && 
      setTenzies(true)

    }, [dies])

    React.useEffect(() => {
      tenzies && console.log("User Won!")
      tenzies && (document.querySelector("button").textContent = "New Game")
    }, [tenzies])

    const rollDice = () => {
      setDies(oldDies => oldDies.map(die => (
        die.isHeld ? 
        die 
        : {...die, value: randonNum()}
        )))
      // console.log("after roll: ", dies)
    }

    const holdDice = (id) => {
      setDies(oldDies => oldDies.map(die => (
        die.id === id ?
        {...die, isHeld: !die.isHeld} 
        : die
        )))
    }

    return (
        <main>
          <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className='dice-container'>
            {dies.map(die => (
              <Die value={die.value} key={die.id} id={die.id} isHeld={die.isHeld} holdDice={() => holdDice(die.id)} />
            ))}
          </div>
          <button onClick={rollDice} className="roll-dice">Roll</button>
          {tenzies && <ReactConfetti />}
        </main>
    )
  }

  export default App
