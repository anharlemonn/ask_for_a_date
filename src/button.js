import React from "react"
import {useState} from 'react'

function Button(props) {

    const [position, setPosition] = useState({x:null, y:null})
    
   const moveButton = () => {
    const padding = 500
    const randomX = Math.floor(Math.random() * padding ) + 150
    const randomY = Math.floor(Math.random() * padding) + 150

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
            onClick={moveButton}
            >
            {props.text}
            
            </button>
        </div>
    )
}

export default Button;