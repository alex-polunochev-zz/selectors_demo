import React from "react"
import { connect } from "react-redux"
import "./App.css"
import styled from "styled-components"

const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 75%;
  padding: 10px;
  margin: 10px;
  tr:first-child td {
    background-color: #eee;
  }
  td {
    border: 1px solid #ccc;
  }
`

const App = props => {
  const renderHeader = () => {
    const { cols } = props.users
    return (
      <tr>
        {cols.map((next, index) => (
          <td key={index}>{next}</td>
        ))}
      </tr>
    )
  }

  const renderRows = () => {
    const { data } = props.users
    return data.map((nextRow, rowIdx) => {
      return (
        <tr key={rowIdx}>
          {nextRow.map((nextCol, colIdx) => (
            <td key={colIdx}>{nextCol}</td>
          ))}
        </tr>
      )
    })
  }

  console.log("Render Table")

  return (
    <div className="App">
      <Table>
        <tbody>
        {renderHeader()}
        {renderRows()}
        </tbody>
      </Table>
    </div>
  )
}

const mapStateToProps = ({ users }) => {
  const { cols, data } = users

  const noPointsCols = cols.filter((next, index) => index !== 5)
  const noPointsUsers = data.map(nextUser => nextUser.filter((nextVal, index) => index !== 5))

  return { users: { cols: noPointsCols, data: noPointsUsers } }
}

export default connect(mapStateToProps)(App)
