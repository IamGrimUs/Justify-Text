import * as React from 'react'

export const TextBox = ({ boxWidth, boxText }) => {
  const styleObj = {
    width: `${boxWidth}px`,
    color: '#000000'
  }

  const determineCharactersPerLine = () => {
     return Math.floor((boxWidth - 20) / 10)
  }

  const countElements = (input) => {
    let count = 0
    const chars = input.trim().split('')
    chars.forEach(char => count++)
    return count
  }

  const addSpaces = (listOfWords, spacesToAdd) => {
    const tempArray = [...listOfWords]

    let count = 0
    let position = 0

    while (count < tempArray.length + spacesToAdd ) {
      if (position < tempArray.length - 1) {
        console.log(count)
        tempArray[position] += ' '
        position++
        count++
      } else {
        position = 0
      }
    }
    return <pre>{tempArray}</pre>
  }

  const determineWordsInStringAndCountCharacters = () => {
    const wordsArray = boxText.trim().split(' ')
    const characterCount = countElements(boxText)
    const charactersPerLine = determineCharactersPerLine()
    const spacesToAdd = charactersPerLine - characterCount
    return addSpaces(wordsArray, spacesToAdd)
  }

  return (
    <div className="text-box-frame">
      <p>Results</p>
      <div style={styleObj} className="text-box">
        {determineWordsInStringAndCountCharacters()}
      </div>
    </div>
  )
}