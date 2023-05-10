import React, { Component } from 'react'

export class show extends Component {
  render() {
    const manager = this.props.manager;
    console.log(manager)
    return (
      <div>
        <h1>Manager Show Page</h1>
        <p>
          id: {manager.id}<br/>
          First Name: {manager.firstName}<br/>
          Last Name: {manager.lastName}<br/>
          Title: {manager.title}<br/>
          Email: {manager.email}<br/>
          Phone: {manager.phone}<br/>
          Department Id: <a href={`/departments/${manager.department_id}`}>{manager.department_id}</a><br/>
        </p>
      </div>
    )
  }
}

export default show 
