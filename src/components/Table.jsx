import React, {Component} from 'react'
import TableRow from './TableRow'

class Table extends Component {
    constructor() {
        super();
        this.state = {
            rows: 1,
            columns: 1,
            color: null,
            colorThem: false,
            clearThem: false,
        }
    }

    addRow = () => {
        this.setState({rows: this.state.rows + 1});
    }
    addColumn = () => {
        this.setState({columns: this.state.columns + 1});
    }
    removeRow = () => {
        if(this.state.rows > 0) {
            this.setState({rows: this.state.rows - 1});
        }
        else {
            alert("Cannot remove anymore fool!");
        }
    }
    removeColumn = () => {
        if(this.state.columns > 0) {
            this.setState({columns: this.state.columns - 1});
        }
        else {
            alert("Cannot remove anymore fool!");
        }
    }
    setColor = (e) => {
        this.setState({color: e.target.value});
    }
    colorIt = (e) => {
        e.target.style.backgroundColor = this.state.color;
    }
    colorAll = (e) => {
        this.setState(prevState => ({
            colorThem: !prevState.colorThem, clearThem: false}));
    }
    clearAll = (e) => {
        this.setState(prevState => ({
            clearThem: !prevState.clearThem, colorThem: false}));
    }
    // chgBackground = (e) => {
    //     this.setState(prevState => ({
    //         background: !prevState.background, colorThem: false
    //     }))
    // }

    render() {
        let newTable = [];

        for (let i = 0; i < this.state.rows; i++) {
            newTable.push (
                <TableRow
                columns = {this.state.columns}
                color = {this.state.color}
                colorIt = {this.colorIt}
                colorAll = {this.colorAll}
                clearAll = {this.clearAll}
                colorThem = {this.state.colorThem}
                clearThem = {this.state.clearThem}
                />);
            }
        return (
            <div>
                <button className = "button" onClick = {this.removeRow}>-</button>
                Rows: {this.state.rows}
                <button className = "button" onClick = {this.addRow}>+</button>
                <p></p>
                <button className = "button" onClick = {this.removeColumn}>-</button>
                Columns: {this.state.columns}
                <button className = "button" onClick = {this.addColumn}>+</button>

                <h4>Coloring Tools</h4>
                <select className = "custom-select my-1 mr-sm-2" onChange = {this.setColor}>
                    <option> None </option>
                    <option value = "#FF2020" >Red</option>
                    <option value = "#77B61E" >Green</option>
                    <option value = "#1E56B6" >Blue</option>
                </select>
                <button className = "button" onClick = {this.colorAll}>Color All</button>
                <button className = "button" onClick = {this.clearAll}>Clear All</button>
                <p></p>
                <table>
                    {newTable}
                </table>
            </div>
        )
    }
}

export default Table;