import React from 'react'
import Die from './components/Die'
import '../style.css'

import { nanoid } from 'nanoid'

  const App = () => {

    /**
 * Challenge: Create a function `holdDice` that takes
 * `id` as a parameter. For now, just have the function
 * console.log(id).
 * 
 * Then, figure out how to pass that function down to each
 * instance of the Die component so when each one is clicked,
 * it logs its own unique ID property. (Hint: there's more
 * than one way to make that work, so just choose whichever
 * you want)
 * 
 */

    const randonNum = () => (Math.floor(Math.random() * 7))

    const randomArray = () => (Array.from({length: 10}, () => randonNum()));

    const [dies, setDies] = React.useState(
      // State Lazy init, by using an arrow function
      () => randomArray().map(el => ({id: nanoid(), value:el, isHeld: false})))

    const [tenzies, setTenzies] = React.useState(false)

    React.useEffect(() => {
      console.log(`effect called`)
      // console.log(`are Held: ${dies.filter(die => die.isHeld).length}`)
      // console.log("all are held: ", dies.every(die => die.isHeld))
      // console.log("all are equal: ", dies.every(die => die.value === dies[0].value))
      setTenzies(
        dies.every(die => die.isHeld) && 
        dies.every(die => die.value === dies[0].value)
        )
    }, [dies])
      
    console.log("dies: ", dies)
    tenzies && console.log("User Won!")

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
        </main>
    )
  }

  export default App
