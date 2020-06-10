import React from "react"
import { TextContext } from "./App"

const Child = ({ text }) => {
  return <div>{text}</div>
}

const Text = React.memo(() => {
  console.log("TEXT render")
  return (
    <TextContext.Consumer>
      {(value) => <Child text={value} />}
    </TextContext.Consumer>
  )
})

export default Text
