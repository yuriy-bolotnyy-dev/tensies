import React from "react";

const Die = (props) => {
    return (<div className={props.isHeld ? "die held" : "die"} onClick={props.holdDice}>
        {/* {props.value} */}
        <div className="box">
            <div className={props.isHeld ? 'flipper' : 'flip'}>
                <img src={`../../public/${props.value}.png`} alt="" />
            </div>
        </div>
        
        <div className="die-mask"></div>
    </div>)
}

export default Die