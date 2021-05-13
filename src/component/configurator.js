import React, {useState, useEffect} from 'react'
import RangeInput from './rangeInput'

function Configurator({getOriginalBlur, getOriginalTransparency}) {
    const [transparency, setTransparency] = useState(20);
    const [blur, setBlur] = useState(100)

    useEffect(() => {
        getOriginalTransparency(transparency);
        getOriginalBlur(blur);
    }, [blur, transparency])
    return (
        <section className="config">
            <h1>Configurator</h1>
           <RangeInput min="0" max="100" step="5" value={transparency} setValue={setTransparency} title="Transparency" />
           <RangeInput min="0" max="2000" step="100" value={blur} setValue={setBlur} title="Blur Value" />
           <input type="color"/>
           Css
            <code>
                <span><span class="property">background</span>: rgba<span class="bracket">(</span><span class="value">255</span>,<span class="value">255</span>,<span class="value">255</span>, <span class="value">{transparency / 100}</span><span class="bracket">)</span>;</span>
                <span><span class="property">backdrop-filter</span>: blur<span class="bracket">(</span><span class="value">{blur / 100}px</span><span class="bracket">)</span>;</span>
                <span><span class="property">-webkit-backdrop-filter</span>:blur<span class="bracket">(</span><span class="value">{blur / 100}px</span><span class="bracket">)</span>;</span>
            </code>
        </section>
    )
}

export default Configurator
