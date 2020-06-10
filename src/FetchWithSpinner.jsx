import React, { useState } from "react"

const data = "some data"

const FetchWithSpinner = () => {
  console.log("render")
  const [state, setState] = useState({ loading: false, data: null })
  const handleFetch = () => {
    setState({ loading: true, data: null })
    setTimeout(() => {
      // !!! Interesting stuff. In this case React doesn't optimize setters
      // and after first setState component rerender and only then trigger another !!!
      setState({ loading: true, data: data })
      setState({ loading: false, data: data })
    }, 1000)
  }
  return (
    <div>
      <button onClick={handleFetch}>fetch data</button>
      <p>{state.data}</p>
    </div>
  )
}

export default FetchWithSpinner
