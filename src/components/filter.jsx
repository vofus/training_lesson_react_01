'use strict';

import React from 'react';

export class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.setStateMainComponent = this.props.setStateMainComponent;
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
    filterUsers(event) {
        event.preventDefault();
        let searchSubStr = new RegExp(event.target.value, 'i');

        let filterUsers = this.props.data.users.filter((item) => {
                return searchSubStr.test(item.first_name);
            });

        this.setStateMainComponent({
            filterUsers: filterUsers,
            selectUser: filterUsers[0]
        });

    }
    render() {
        return (
                <form>
                    <div className="form-group">
                        <label>Filter users for first name</label>
                        <input 
                               type="text"
                               className="form-control" 
                               id="filterInput" 
                               placeholder="Filter users..." 
                               onKeyUp={ this.filterUsers.bind(this) }
                               onKeyDown={ this.calcPages.bind(this) }
                        />
                    </div>
                </form>
                );
    }
}