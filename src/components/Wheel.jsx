import React, { useState, useEffect } from 'react'
import { data } from './Data';

function Wheel() {
    const [angle, setangle] = useState()
    let randomSeconds = Math.round(Math.random() * 10)
    let totalRotates = randomSeconds * 360;

    let nthElement = totalRotates / 360;
    
    const handleClick = async () => {
        let finalAngle = nthElement * 45
        setangle(finalAngle)
        console.log(`The arrow is pointing to ${finalAngle} degree in the circle`)
    }
    



    return (
        <div>
            <button onClick={handleClick} id="spin"> Spin </button>

            <span className="arrow"> </span>

            <div style={{ transform: `rotate(${totalRotates}deg)` }} className="container">

                {
                    data?.map((element, index) => <div key={index} className={element.class}>{element.text}</div>)
                }

            </div>

            <div>

                <span className="anglerotate">
                    {angle && angle + " deg"}
                </span>

            </div>

        </div>
    )
}

export default Wheel