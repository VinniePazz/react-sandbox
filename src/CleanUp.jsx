import React, { useState, useEffect, memo } from "react"

const ChildOne = ({ content }) => {
  console.log("ChildOne")
  useEffect(() => {
    console.log("ChildOne useEffect")
    return () => {
      console.log("ChildOne clean up")
    }
  })
  return <div>{content}</div>
}

const ChildTwo = ({ content }) => {
  console.log("ChildTwo")
  useEffect(() => {
    console.log("ChildTwo useEffect")
    return () => {
      console.log("ChildTwo clean up")
    }
  })
  return <div>{content}</div>
}

const CleanUp = () => {
  const [num, setState] = useState(1)

  useEffect(() => {
    console.log("useEffect")
  })

  const childElement =
    num === 1 ? <ChildOne content={1} /> : <ChildTwo content={2} />

  return (
    <>
      <button
        onClick={() => {
          setState(1)
        }}
      >
        Child one
      </button>
      <button
        onClick={() => {
          setState(2)
        }}
      >
        Child two
      </button>
      <br />
      <br />
      <br />
      {childElement}
    </>
  )
}

export default CleanUp
