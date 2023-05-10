import React, { Component } from 'react'

export class index extends Component {
  render() {
    const departments = this.props.departments;
    return (
      <div>
        <h1>Departments Index Page</h1>
                <ul>
                    {departments.map((department, i) => {
                        return (
                            <li>
                                <a href={`/departments/${department.id}`}>
                                    {`${department.name} / ID: ${department.id}`}
                                </a>
                                <br />
                            </li>
                        );
                    })}
                </ul>
      </div>
    )
  }
}

export default index