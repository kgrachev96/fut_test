import * as React from 'react';

export default class UserData extends React.Component<any, any> {
    selectUser = () => {
        this.props.selectUser(this.props.user);
    };

    render() {
        return (
            <tr onClick={this.selectUser}>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.firstName}</td>
                <td>{this.props.user.lastName}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.phone}</td>
            </tr>
        );
    }
}