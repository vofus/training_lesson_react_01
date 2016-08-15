'use strict';

import React from 'react';

export class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.setStateMainComponent = this.props.setStateMainComponent;
    }
    sortBtnsHendler(event) {
        let target = event.target,
            self = this;

        while (target.tagName !== 'DIV') {
            if (target.tagName === 'BUTTON') {
                let sortDirection = target.getAttribute('data-sort');
                sortUsers(self.props.data, sortDirection);
                return;
            }
            target = target.parentNode;
        }
        function sortUsers(usersArr, sortDir) {
            usersArr.sort((a, b) => {
                let nameA = a.last_name.toLowerCase();
                let nameB = b.last_name.toLowerCase();

                if (sortDir == 'up') {
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                }
                if (sortDir == 'down') {
                    if (nameA < nameB) {
                        return 1;
                    }
                    if (nameA > nameB) {
                        return -1;
                    }
                }

                return 0;
            });
            self.setStateMainComponent({
                filterUsers: usersArr,
                selectUser: usersArr[0]
            });
        }
    }
    render() {
        return (
            <div className="sort-btns btn-group" role="group" onClick={ this.sortBtnsHendler.bind(this) }>
                <button data-sort='up' type="button" className="btn btn-default">Sort UP</button>
                <button data-sort='down' type="button" className="btn btn-default">Sort DOWN</button>
            </div>
            );
    }
}