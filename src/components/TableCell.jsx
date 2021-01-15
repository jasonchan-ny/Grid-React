import React from 'react';

function TableCell(props) {
    let selectedStyle = {backgroundColor: props.color};
    let noStyle = {backgroundColor: null};

    if(props.colorThem === true) {
        return <td onClick = {props.colorIt} draggable = {true} onDragOver = {props.colorIt} tyle = {selectedStyle}></td>
    }
    if(props.clearThem === true) {
        return <td onClick = {props.colorIt} draggable = {true} onDragOver = {props.colorIt} style = {noStyle}></td>
    }
    // if(props.chgBackground === true) {
    //     return <td ></td>
    // }
    else {
        return <td onClick = {props.colorIt} draggable = {true} onDragOver = {props.colorIt}></td>
    }
}
export default TableCell;