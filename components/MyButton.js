import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'


class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.callback} style={this.props.boxStyle}>
                <Text style={this.props.textStyle}>{this.props.children}</Text>
            </TouchableOpacity>
        )
    }
}

MyButton.propTypes = {
    callback: PropTypes.func.isRequired,
    boxStyle: PropTypes.object,
    textStyle: PropTypes.object
}

export default MyButton