import React, { useState, useEffect, memo } from "react"

const Parent = memo((props) => {
  const [state, setState] = useState({ text: "num: " })
  console.log("Parent");console.log(props.children)
  useEffect(() => {
    console.log("Parent useEffect")
  })
  return <div>{props.children}</div>
})

const Child = ({ num, text }) => {
  console.log("Child")
  useEffect(() => {
    console.log("Child useEffect")
  })
  return (
    <div>
      {text}
      {num}
    </div>
  )
}

const Children = () => {
  const [state, setState] = useState(0)
  useEffect(() => {
    console.log("useEffect")
  })

  return (
    <>
      <button
        onClick={() => {
          setState((prev) => ++prev)
        }}
      >
        Click me
      </button>
      <Parent>
        <Child num={state} />
      </Parent>
    </>
  )
}

export default Children
