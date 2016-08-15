'use strict';

import React from 'react';

export class Saidbar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if (this.props.data.length === 0) {
			return (
				<div className='saidbar'>
					<dl className="saidbar__description dl-horizontal">
						<dt>Name:</dt>
						<dd>Noname</dd>
					</dl>
					<dl className="saidbar__description dl-horizontal">
						<dt>Gender:</dt>
						<dd>Noname</dd>
					</dl>
					<dl className="saidbar__description dl-horizontal">
						<dt>Email:</dt>
						<dd>Noemail</dd>
					</dl>
					<div className='photo-fake'></div>
				</div>
				);
		}
		return (
			<div className='saidbar'>
				<dl className="saidbar__description dl-horizontal">
					<dt>Name:</dt>
					<dd>{this.props.user.first_name} {this.props.user.last_name}</dd>
				</dl>
				<dl className="saidbar__description dl-horizontal">
					<dt>Gender:</dt>
					<dd>{this.props.user.gender}</dd>
				</dl>
				<dl className="saidbar__description dl-horizontal">
					<dt>Email:</dt>
					<dd>{this.props.user.email}</dd>
				</dl>
				<img src={this.props.user.avatar} width='300' height='300'/>
			</div>
			);
	}
}