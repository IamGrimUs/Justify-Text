import * as React from 'react'

const { useState } = React

export const Form = ({ widthLabel, defaultWidthState, textLabel, defaultTextState }) => {
  const [boxWidth, setBoxWidth] = useState(defaultWidthState)
  const [boxText, setBoxText] = useState(defaultTextState)

  return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="boxWidth">
            { widthLabel }
            <input
              id="boxWidth"
              value={boxWidth}
              type="number"
              onChange={(e) => setBoxWidth(e.target.value)}
              onBlur={(e) => setBoxWidth(e.target.value)} />
          </label>
          <label htmlFor="boxText">
            { textLabel }
            <textarea
              id="boxText"
              value={boxText}
              type="text"
              onChange={(e) => setBoxText(e.target.value)}
              onBlur={(e) => setBoxText(e.target.value)} />
          </label>
        </form>
      </div>
    )
  }