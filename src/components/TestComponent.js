import React, { Component } from 'react'

// Cách 1
export default class TestComponent1 extends Component {

    render() {
        return (
            <div style={{
                width: "100px",
                height: "100px",
                backgroundColor: `${this.props.color}`
            }}>
                123
            </div>
        )
    }

}

// Cách 2
export const TestComponent2 = ({ color }) => {
    return (
        <div style={{
            width: "100px",
            height: "100px",
            backgroundColor: `${color}`
        }}>
            123
        </div>
    )
}