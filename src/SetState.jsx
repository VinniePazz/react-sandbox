import React, { useState, useEffect } from "react"

function SetState() {
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)
  const [four, setFour] = useState(0)
  const [five, setFive] = useState(0)

  // if using React stric mode - this will be trigerred twice instead of one in normal mode
  console.log("component")

  useEffect(() => {
    console.log("useEffect")
    return () => {
      console.log("clean up")
    }
  })

  return (
    <>
      <button
        onClick={() => {
          // despite of fact that setters defined one by one, React somehow optimizes that and called setters simultaniously!
          // so eventually we have one rerender instead of 5
          setOne((prev) => ++prev)
          setTwo((prev) => ++prev)
          setThree((prev) => ++prev)
          setFour((prev) => ++prev)
          setFive((prev) => ++prev)
        }}
      >
        click
      </button>
      <p>
        {one}:{two}:{three}:{four}:{five}
      </p>
    </>
  )
}

export default SetState
