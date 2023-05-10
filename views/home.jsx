import React, { Component } from 'react'

export class home extends Component {
  render() {
    return (
      <div>
          <a href="/managers"><h2>Managers</h2></a>
          <a href="/departments"><h2>Departments</h2></a>
      </div>
    )
  }
}

export default home