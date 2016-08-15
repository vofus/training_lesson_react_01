'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { Table } from './components/table';
import { Filter } from './components/filter';
import { Saidbar } from './components/saidbar';
import { Sort } from './components/sort';
import { Paginator } from './components/paginator';

const URL = 'http://dselkirk.getsandbox.com/users';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            filter: false,
            filterUsers: null,
            selectUser: null
        };
    }
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers() {
        let users = sessionStorage.getItem('users');

        if (users) {
            console.info('Load data from sessionStorage!');
            let usersArr = JSON.parse(users);

            this.setState({
                users: usersArr,
                filterUsers: usersArr,
                selectUser: usersArr[0]
            });
            return;
        }

        fetch(URL)
            .then(response => {
                console.info('Load data from URL!');
                return response.json();
            })
            .then(data => {
                sessionStorage.setItem('users', JSON.stringify(data));
                let usersArr = data;

                this.setState({
                    users: usersArr,
                    filterUsers: usersArr,
                    selectUser: usersArr[0]
                });
            });
    }
    render() {
        if (this.state.users.length === 0) {
            return <p>Please wait... Loading data...</p>
        }
        return (
                <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className='row'>
                            <div className='col-md-12'>
                                <Filter data={this.state} setStateMainComponent={this.setState.bind(this)}/>
                            </div>
                            <div className='col-md-3'>
                                <Sort data={this.state.filterUsers} setStateMainComponent={this.setState.bind(this)}/>
                            </div>
                            <div className='col-md-3'>
                                <Paginator data={this.state} setStateMainComponent={this.setState.bind(this)}/>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <Table data={this.state} setStateMainComponent={this.setState.bind(this)}/>
                        </div>
                        <div className='col-md-4'>
                            <Saidbar user={this.state.selectUser} data={this.state.filterUsers}/>
                        </div>
                    </div>
                </div>
                </div>
                );
    }
}

ReactDOM.render(<Main />, document.getElementById('myApp'));