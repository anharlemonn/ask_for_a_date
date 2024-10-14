import React from "react"
import {useState} from 'react'

function Button(props) {

    const [position, setPosition] = useState({x:null, y:null})
    
   const moveButton = () => {
    const padding = 600
    const randomX = Math.floor(Math.random() * padding ) + 250
    const randomY = Math.floor(Math.random() * padding) + 250

    setPosition({x: randomX, y: randomY})

   }
    return (
        <div>
            <button style={{
                position: 'absolute',
                top: `${position.x}px`,
                left: `${position.y}px`,
            }}
            onMouseEnter={moveButton}
            >
            {props.text}
            
            </button>
        </div>
    )
}

export default Button;