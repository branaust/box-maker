import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import './BoxList.css'

class BoxList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    addItem = (item) => {
        let newItem = { ...item }
        this.setState(state => ({
            items: [...state.items, newItem]

        }))
    }

    renderItems = () => {
        return (
            <ul className="Boxes">
                {this.state.items.map(item => (
                    <li className="Box">
                        <Box
                            backgroundColor={item.backgroundColor}
                            height={item.height}
                            width={item.width}
                        />
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div className='BoxList'>
                <h1>BOX MAKAAAA</h1>
                <NewBoxForm addItem={this.addItem} />
                {this.renderItems()}
            </div>
        )
    }
}

export default BoxList