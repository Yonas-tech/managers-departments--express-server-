import React, { Component } from 'react'

export class index extends Component {
  render() {
    const managers = this.props.managers;
    return (
      <div>
        <h1>Managers Index Page</h1>
                <ul>
                    {managers.map((manager, i) => {
                        return (
                            <li>
                                <a href={`/managers/${manager.id}`}>
                                    {`${manager.lastName}, ${manager.firstName} / ID: ${manager.id}`}
                                </a>
                                <br />
                            </li>
                        );
                    })}
                </ul>
                {/* <nav>
                    <a href="/fruits/new">Create a New Fruit</a>
                </nav> */}
      </div>
    )
  }
}

export default index