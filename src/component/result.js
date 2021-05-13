import React, {useState, useEffect} from 'react'
import Bubble from './bubble'

export default function Result({blur, transparency}) {

    useEffect(() => {
        console.log(blur, transparency)
    }, [blur, transparency])

    return (
        <div className="result">
            <p>This section is made for the preview of the glassmorph effect.</p>
            <p>You can customize your glassmorph effect as you want.</p>
            <p>If you want more blur, you can use the slides, and you can do it with the transparency as well.</p>
            <p>When your glassmorph effect is ready, just copy the css code and you are ready to roll</p>
            <Bubble positionX="50" positionY="80" blur={blur / 100} transparency={transparency / 100} height="100" width="100" />
            <Bubble positionX="60" positionY="10" blur={blur / 100} transparency={transparency / 100} height="200" width="200" />
            <Bubble positionX="20" positionY="10" blur={blur / 100} transparency={transparency / 100} height="50" width="50" />
            <Bubble positionX="20" positionY="50" blur={blur / 100} transparency={transparency / 100} height="75" width="75" />
        </div>
    )
}
