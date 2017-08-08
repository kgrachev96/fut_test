import * as React from 'react';
import UserData from '../UserData';

import './style.scss';

export default class UserList extends React.Component<any, any> {
    render() {
        if (!this.props.list) {
            return (<span>Loading...</span>)
        }

        return (
            <table className="user-list table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {this.props.list.map((item: any) => {
                    return (
                        <UserData key={item.id} user={item} selectUser={this.props.selectUser}/>
                    )
                })}
                </tbody>
            </table>
        );
    }
}

