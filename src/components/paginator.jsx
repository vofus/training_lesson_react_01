'use strict';

import React from 'react';

export class Paginator extends React.Component {
	constructor(props) {
		super(props);
		this.setStateMainComponent = this.props.setStateMainComponent;
	}
	componentDidMount() {
		this.calcPages();
	}
	calcPages() {
		let arrLength = this.props.data.filterUsers.length,
			pageLimit = 50,
			allPages = Math.ceil(arrLength / pageLimit),
			currentPage = 1;
		this.setStateMainComponent({
			pageLimit: pageLimit,
			allPages: allPages,
			currentPage: currentPage
		});
	}
	pageNavigator(event) {
		let target = event.target,
            self = this;

        while (target.tagName !== 'DIV') {
            if (target.tagName === 'BUTTON') {
                let navDirect = target.getAttribute('data-nav');
                nav(navDirect);
                return;
            }
            target = target.parentNode;
        }
        function nav(navDirect) {
        	let currentPage = self.props.data.currentPage,
        		allPages = self.props.data.allPages;

        	if (navDirect === 'prev') {
        		if (parseInt(currentPage, 10) === 1) return;
        		currentPage--;
        		self.setStateMainComponent({
        			currentPage: currentPage
        		});
        		return;
        	}
        	if (navDirect === 'next') {
        		if (parseInt(currentPage, 10) === allPages) return;
        		currentPage++;
        		self.setStateMainComponent({
        			currentPage: currentPage
        		});
        		return;
        	}
        }
	}
	render() {
		return (
			<div className='paginator' onClick={ this.pageNavigator.bind(this) }>
				<button className='nav-btn btn btn-default' data-nav='prev'>Prev page</button>
				<span className='current-page'>{this.props.data.currentPage} - {this.props.data.allPages}</span>
				<button className='nav-btn btn btn-default' data-nav='next'>Next page</button>
			</div>
			);
	}
}