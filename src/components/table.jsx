'use strict';

import React from 'react';

import { Row } from './row';

export class Table extends React.Component {
	constructor(props) {
		super(props);
		this.setStateMainComponent = this.props.setStateMainComponent;
	}
	selectUser(event) {
        let target = event.target,
            self = this;
        while (target.tagName !== 'TABLE') {
            if (target.tagName === 'TR') {
                selectRow(target);
                return;
            }
            target = target.parentNode;
        }
        function selectRow(target) {
            let userId = target.getAttribute('data-select'),
                selectUser = null;
            if (!userId) return;
            userId = parseInt(userId, 10);
            selectUser = self.props.data.filterUsers.find((item) => {
                return item.id === userId;
            });
            self.setStateMainComponent({
                selectUser: selectUser
            });
        }
    }
	render() {
		let currentPage = this.props.data.currentPage,
			pageLimit = this.props.data.pageLimit,
			currentArr = this.props.data.filterUsers.slice((currentPage-1) * pageLimit, currentPage * pageLimit);
		return (
			<table className='table__users table table-striped' onClick={ this.selectUser.bind(this) }>
				<thead>
					<tr>
						<th>First name</th>
						<th>Last name</th>
						<th>Avatar</th>
					</tr>
				</thead>
				<tbody>
					{
						currentArr.map((item, index) => {
							return <Row 
										key={index}
										selector={item.id}
										first_name={item.first_name}
										last_name={item.last_name}
										avatar={item.avatar}
									/>
						})
					}
				</tbody>
			</table>
			);
	}
}