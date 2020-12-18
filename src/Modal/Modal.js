import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <div style={{textAlign: 'center'}}>
                        <button className = 'btn' style = {{ marginBottom: '2.5rem' }} onClick={() => this.setState({ isOpen: true })}>Open modal</button>
                </div>
                
                {this.state.isOpen && (
                    <div className='modal'>
                        <div className='modal-body'>
                            <h2>Modal title</h2>
                            <p>I am modal</p>
                            <button className='btn' onClick={() => this.setState({ isOpen: false })}>Close modal</button>
                        </div>
                    </div>
                )}
            </React.Fragment >
        )
    }
}