import * as React from 'react'
import {TextBox} from './components/text-box'
import './App.css';

const {useState} = React

export const App = () => {
  const [boxWidth, setBoxWidth] = useState(480)
  const [boxText, setBoxText] = useState('The quick brown fox jumps over the lazy dog.')

  return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="boxWidth">
            Width of Text Box
            <input
              id="boxWidth"
              value={boxWidth}
              type="number"
              onChange={(e) => setBoxWidth(e.target.value)}
              onBlur={(e) => setBoxWidth(e.target.value)} />
          </label>
          <label htmlFor="boxText">
            Text for justification
            <textarea
              id="boxText"
              value={boxText}
              type="text"
              onChange={(e) => setBoxText(e.target.value)}
              onBlur={(e) => setBoxText(e.target.value)} />
          </label>
        </form>
        <TextBox boxWidth={boxWidth} boxText={boxText} />
      </div>
    )
  }