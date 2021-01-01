import React, { Component } from 'react'
import './NewBoxForm.css'
import uuid from "uuid/v4"

class NewBoxForm extends Component {

    constructor(props) {
        super(props);
        this.state = { backgroundColor: '', height: '', width: '' }
    }

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        const newBox = { ...this.state, id: uuid() }
        this.props.addItem(newBox)
        this.setState({ backgroundColor: '', height: '', width: '' })
    }

    render() {
        return (
            <form className="NewBoxForm" onSubmit={this.handleSubmit}>
                <label htmlFor='height'>Height</label>
                <input
                    id='height'
                    name='height'
                    value={this.state.height}
                    onChange={this.handleChange}
                />
                <label htmlFor='width'>Width</label>
                <input
                    id='width'
                    name='width'
                    value={this.state.width}
                    onChange={this.handleChange}
                />
                <label htmlFor='backgroundColor'>Background Color</label>
                <input
                    id='backgroundColor'
                    name='backgroundColor'
                    value={this.state.backgroundColor}
                    onChange={this.handleChange}
                />
                <button>Add New Box</button>
            </form>
        )
    }
}

export default NewBoxForm