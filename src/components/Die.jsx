import React from "react";

const Die = (props) => {
    const handleClick = (event) => {
        // console.log("event", event)
        // console.log("id:", props.id)
        props.holdDice(props.id)
    }

    return <div className={props.isHeld ? "die held" : "die"} onClick={handleClick}>{props.value}</div>
}

export default Die