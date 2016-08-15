'use strict';

import React from 'react';

export class Row extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <tr data-select={this.props.selector}>
                    <td>{this.props.first_name}</td>
                    <td>{this.props.last_name}</td>
                    <td><img src={this.props.avatar} width='50' height='50'/></td>
                </tr>
                );
    }
}