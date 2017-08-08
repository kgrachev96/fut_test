import * as React from 'react';

import './style.scss';


export default class ActiveUser extends React.Component<any, any> {
    render() {
        if (!this.props.user) {
            return (<h2>Nothing found :(</h2>);
        }

        return (
            <div className="thumbnail">
                <div className="thumbnail-caption">
                    <h3>{this.props.user.firstName} {this.props.user.lastName}</h3>
                    <table className="user-info table table-responsive">
                        <tbody>
                        <tr>
                            <td>Address:</td>
                            <td>
                            <b>{this.props.user.address.city}</b>
                            </td>
                        </tr>
                                                <tr>
                            <td>Address:</td>
                            <td>
                            <b>{this.props.user.address.city}</b>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <p>
                        <b>Description: </b>
                        <span>{this.props.user.description}</span>
                    </p>
                </div>
            </div>
        );
    }
}
