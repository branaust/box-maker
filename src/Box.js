import React, { Component } from 'react'
import './Box.css'

class Box extends Component {
    render() {
        return (
            <div>
                <div
                    className='Box'
                    style={{
                        backgroundColor: `${this.props.backgroundColor}`,
                        width: `${this.props.width}px`,
                        height: `${this.props.height}px`
                    }}
                />
                <button onClick={this.props.removeBox}>X</button>
            </div>

        );
    }
}

export default Box