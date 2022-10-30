import React from "react";

const Die = (props) => (
    <div className={props.isHeld ? "die held" : "die"} onClick={props.holdDice}>
        {/* {props.value} */}
        <img src={`../../public/${props.value}.png`} alt="" />
        <div className="die-mask"></div>
    </div>
)

export default Die