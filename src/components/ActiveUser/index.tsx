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
                            <td>
                            <p><h2>Address</h2></p>
                            <p><b>Street: </b>{this.props.user.address.streetAddress}</p>
                            <p><b>City: </b>{this.props.user.address.city}</p>
                            <p><b>State: </b>{this.props.user.address.state}</p>
                            <p><b>Zip: </b>{this.props.user.address.zip}</p>
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
