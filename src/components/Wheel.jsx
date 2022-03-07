import React, { useState, useEffect } from 'react'

function Wheel() {
    const [angle, setangle] = useState()

    let randomSeconds = Math.round(Math.random() * 10)
    let totalRotates = randomSeconds * 360;

    const handleClick = () => {
        let nthElement = totalRotates / 360;
        setangle(nthElement * 45)
        console.log(`The arrow is pointing to ${angle} degree in the circle`)
    }






    return (
        <div> <button onClick={() => handleClick()} id="spin">Spin</button>
            <span className="arrow">
            </span>
            <div style={{ transform: `rotate(${totalRotates}deg)` }} className="container">
                <div className="one">1</div>
                <div className="two">2</div>
                <div className="three">3</div>
                <div className="four">4</div>
                <div className="five">5</div>
                <div className="six">6</div>
                <div className="seven">7</div>
                <div className="eight">8</div>
            </div>

            <div>
                <span className="anglerotate">
                    {angle && angle + " deg"}
                </span>
            </div></div>
    )
}

export default Wheel