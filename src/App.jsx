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

  const holdDice = (id) => {
    console.log(`hold dice id: ${id}`)
  }

    const randonNum = () => (Math.floor(Math.random() * 7))

    const randomArray = () => (Array.from({length: 10}, () => randonNum()));

    const [dies, setDies] = React.useState(
      // State Lazy init, by using an arrow function
      () => randomArray().map(el => ({id: nanoid(), value:el, isHeld: true})))

    console.log("dies: ", dies)

    const rollDice = () => {
      // console.log("before roll: ", dies)
      // console.log("roll: ", dies.map(die => ({id:die.id, value:randonNum()})))
      setDies(oldDies => (oldDies.map(die => (
        // {id: die.id, value: randonNum(), isHeld: die.isHeld}
        {...die, value: randonNum()}
        ))))
      // console.log("after roll: ", dies)
    }

    return (
        <main>
          <div className='dice-container'>
            {dies.map(die => (
              <Die value={die.value} key={die.id} id={die.id} isHeld={die.isHeld} holdDice={holdDice} />
            ))}
          </div>
          <button onClick={rollDice} className="roll-dice">Roll</button>
        </main>
    )
  }

  export default App
