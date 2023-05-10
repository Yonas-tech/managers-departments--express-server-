import React, { Component } from 'react'

export class show extends Component {
  render() {
    const department = this.props.department;
    return (
      <div>
        <h1>Department Show Page</h1>
        <p>
          id: {department.id}<br/>
          name: {department.name}<br/>
          Manager Id: {department.managerId}<br/>
          Location Id: {department.locationId}<br/>
        </p>
      </div>
    )
  }
}

export default show

// id: 20,
// name: "Marketing",
// managerId: 201,
// locationId: 1800