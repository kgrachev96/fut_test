import * as React from 'react';


export default class SearchBar extends React.Component<any, any> {
    changeValue = (e: any) => {
        this.props.changeValue(e.target.value);
    };

    render() {
        return (
            <div className="form-group">
                <input value={this.props.searchValue} onChange={this.changeValue}
                       type="text" className="form-control"
                       placeholder="Search people by name..."/>
            </div>
        );
    }
}