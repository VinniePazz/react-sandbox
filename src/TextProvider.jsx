import React, { useState } from "react"
import Text from "./Text"
import FetchWithSpinner from "./FetchWithSpinner"

export const TextContext = React.createContext()
TextContext.displayName = "TEXT"

// If we pass to Provider non primitive value, this will rerender all Consumers based on this Provider every time App state changes
// because every time when App rerender, Provider will be rerendered with new object type value with brand new reference despite of fact that text changes or not

function TextProvider() {
  const [num, setNum] = useState(0)
  const [text, setText] = useState("something")
  return (
    <>
      <button
        onClick={() => {
          setNum(num + 1)
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setText("asdasd")
        }}
      >
        Change context value
      </button>
      <TextContext.Provider value={text}>
        <Text />
      </TextContext.Provider>
      <FetchWithSpinner />
    </>
  )
}

export default TextProvider
