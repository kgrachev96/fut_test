import * as React from 'react';

import './style.scss';

export default class Toolbar extends React.Component<any, any> {
    render() {
        return (
            <div className="toolbar">
                <button className="btn btn-default" onClick={this.props.sortByID}>
                    <i className="icon fa fa-sort-numeric-desc"/>
                    <span>  Sort by ID</span>
                </button>
                <button className="btn btn-default" onClick={this.props.sortByName}>
                    <i className="icon fa fa-sort-alpha-asc"/>
                    <span>  Sort by Firstname</span>
                </button>
                <button className="btn btn-default" onClick={this.props.sortByLastName}>
                    <i className="icon fa fa-sort-alpha-asc"/>
                    <span>  Sort by Lastname</span>
                </button>
            </div>
        );
    }
}