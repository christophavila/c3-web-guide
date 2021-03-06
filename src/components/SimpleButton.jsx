import React from 'react';
import {defaultTextColor} from '../constants.js';

class SimpleButton extends React.Component {
    constructor() {
        super();

        this.state = {
            buttonActive: false,
            buttonHover: false
        }

        this.buttonStartHover = this.buttonStartHover.bind(this);
        this.buttonStopHover = this.buttonStopHover.bind(this);
        this.buttonStartClick = this.buttonStartClick.bind(this);
        this.buttonStopClick = this.buttonStopClick.bind(this);
    }

    buttonStartHover() {this.setState({buttonHover: true});}
    buttonStopHover() {this.setState({buttonHover: false});}
    buttonStartClick() {this.setState({buttonActive: true});}
    buttonStopClick() {this.setState({buttonActive: false});}

    render() {
        const style = {
            background: this.state.buttonActive ? '#e1e1e1' : this.state.buttonHover ? '#e6e6e6' : '#f0f0f0',
            margin: 0,
            border: 'none',
            outline: 'none',
            userSelect: 'none',
            color: this.props.disabled ? '#999' : defaultTextColor,
            cursor: this.props.disabled ? 'initial' : 'pointer'
        };
        Object.assign(style, this.props.style);

        return (
            <button
                style={style}
                onClick={this.props.onClick}
                type={this.props.type || 'button'}
                disabled={this.props.disabled}
                onMouseEnter={this.buttonStartHover}
                onMouseLeave={this.buttonStopHover}
                onMouseDown={this.buttonStartClick}
                onMouseUp={this.buttonStopClick}>
                {this.props.children}
            </button>
        );
    }
}

export default SimpleButton;
