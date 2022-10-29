import React from "react";

const Die = (props) => (
    <div className={props.isHeld ? "die held" : "die"}>{props.value}{props.isHeld}</div>
)

export default Die