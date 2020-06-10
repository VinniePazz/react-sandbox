import React, { Component } from "react"

export default class Class extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "hello" }
  }

  render() {
    return <div>{this.state.text}</div>
  }
}
