import * as React from 'react';
import {Pagination} from 'react-bootstrap';

import UserList from '../UserList';
import ActiveUser from '../ActiveUser';
import SearchBar from '../SearchBar';
import Toolbar from '../Toolbar';

const dataURL = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
const bigDataURL = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // Устанавливаем состояние
    this.state = {
      searchValue: '',
      users: [],
      filteredUsers: null,
      sortBy: false,
      order: false,
      activePage: 1
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    fetch(dataURL)
    .then(response => {
          return response.json().then(data => {
              this.state.users = data;
              this.state.filteredUsers = data;
              this.selectUser(data[0]);
          });
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleSelect(eventKey: any) {
    this.setState({
      activePage: eventKey
    });
  };

    selectUser = (user: any) => {
        this.state.activeUser = user;
        this.setState(this.state);
    };

    
     sortByName = () => {
        this.state.order = !this.state.order;
        this.state.filteredUsers = this.state.filteredUsers.sort((a: any, b: any) => {
            return (this.state.order ? 1 : -1) * ((a.firstName < b.firstName) ? -1 : (a.firstName > b.firstName) ? 1 : 0);
        });
        this.selectUser(this.state.filteredUsers[0]);
    };

    sortByID = () => {
        this.state.order = !this.state.order;
        this.state.filteredUsers = this.state.filteredUsers.sort((a: any, b: any) => {
            return (this.state.order ? 1 : -1) * ((a.id < b.id) ? -1 : (a.id > b.id) ? 1 : 0);
        });
        this.selectUser(this.state.filteredUsers[0]);
    };

    sortByLastName = () => {
      this.state.order = !this.state.order;
      this.state.filteredUsers = this.state.filteredUsers.sort((a: any, b: any) => {
          return (this.state.order ? 1 : -1) * ((a.lastName < b.lastName) ? -1 : (a.lastName > b.lastName) ? 1 : 0);
      });
      this.selectUser(this.state.filteredUsers[0]);
    };

    search = (val: any) => {
        const regex = new RegExp(val, 'i');
        this.state.searchValue = val;
        this.state.filteredUsers = this.state.users.filter((el: any) => regex.test(el.firstName));

        this.selectUser(this.state.filteredUsers[0])
    };
   
  render() {
    return(
      <div className="app container-fluid">
        <Pagination
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        items={20}
        maxButtons={5}
        activePage={this.state.activePage}
        onSelect={this.handleSelect} />
        <div className="row">
          <div className="col-sm-12">
          <SearchBar searchValue={this.state.searchValue} changeValue={this.search}/> 
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <Toolbar sortByName={this.sortByName} sortByID={this.sortByID} sortByLastName = {this.sortByLastName}/>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <ActiveUser user={this.state.activeUser}/>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserList list={this.state.filteredUsers} selectUser={this.selectUser}/>
          </div>
        </div>
      </div>
    )
  }
}