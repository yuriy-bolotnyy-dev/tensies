import React from "react";

const Die = (props) => {
    return (<div className={props.isHeld ? "die held" : "die"} onClick={props.holdDice}>
        {/* {props.value} */}
        <div className="box">
            {/* <div className={props.isHeld ? "flipper" : "flip flipper"}> */}
            <div className={props.isHeld ? "flip" : ""}>
                <img src={`../../${props.value}.png`} alt="" />
            </div>
        </div>
        
        <div className="die-mask"></div>
    </div>)
}

export default Die