import React, { Profiler, Component } from "react"
import { connect } from "react-redux"
import "./App.css"
import styled from "styled-components"
import { noPointsUsersSelector, noPointsColsSelector } from "./selectors"

const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 75%;
  padding: 10px;
  margin: 10px;
  tr:first-child td {
    font-weight: bold;
  }
  td {
    border: 1px solid #ccc;
  }
`

const Panel = styled.div`
  display: flex;
`

const Button = styled.button`
  margin: 10px;
  background-color: #ddd;
  height: 40px;
  font-size: 14px;
  cursor: pointer;
`

const Cell = props => {
  // each cell can be made heavy-weight
  return <div>{props.children}</div>
}

class App extends Component {
  renderHeader = () => {
    const { cols } = this.props
    return (
      <tr>
        {cols.map((next, index) => (
          <td key={index}>
            <Cell>{next}</Cell>
          </td>
        ))}
      </tr>
    )
  }

  renderRows = () => {
    const { data } = this.props
    return data.map((nextRow, rowIdx) => {
      return (
        <tr key={rowIdx}>
          {nextRow.map((nextCol, colIdx) => (
            <td key={colIdx}>
              <Cell>{nextCol}</Cell>
            </td>
          ))}
        </tr>
      )
    })
  }

  renderCallback = (id, phase, actualDuration) => {
    console.log("render table (ms): %o", actualDuration)
  }

  updatePoints = () => {
    this.props.dispatch({ type: "UPDATE_POINTS" })
    // for (let i = 0; i < 100; i++) {
    //   setTimeout(() => {
    //     this.props.dispatch({ type: "UPDATE_POINTS_FOR_ID", id: i })
    //   }, Math.round(Math.random() * 10))
    // }
  }

  render() {
    return (
      <div className="App">
        <Panel>
          <Profiler id="Panel" onRender={this.renderCallback}>
            <Table>
              <tbody>
                {this.renderHeader()}
                {this.renderRows()}
              </tbody>
            </Table>
          </Profiler>
          <Button onClick={this.updatePoints}>Update User Data</Button>
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  // DEMO 1

  const { cols, data } = users
  return { cols, data }

  // DEMO 2

  // const { cols, data } = users
  // const noPointsCols = cols.filter((next, index) => index !== 5)
  // const noPointsUsers = data.map(nextUser =>
  //   nextUser.filter((nextVal, index) => index !== 5)
  // )

  // return { cols: noPointsCols, data: noPointsUsers }

  // DEMO 3
  // const filteredUsers = noPointsUsersSelector(users)
  // const noPointsCols = noPointsColsSelector(users)

  // return { cols: noPointsCols, data: filteredUsers }
}

export default connect(mapStateToProps)(App)
