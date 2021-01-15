import React from 'react'
import TableCell from './TableCell'

function TableRow(props) {
    let cells = [];

    for(let i = 0; i < props.columns; i++) {
        cells.push(
            <TableCell
            color = {props.color}
            colorIt = {props.colorIt}
            colorAll = {props.colorAll}
            clearAll = {props.clearAll}
            colorThem = {props.colorThem}
            clearThem = {props.clearThem}
            />
        )
    }
    return <tr>{cells}</tr>
}

export default TableRow