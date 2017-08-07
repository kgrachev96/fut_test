import * as React from 'react';
import { render } from 'react-dom';
import UserList from '../UserList';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // Устанавливаем состояние
    this.state = {
      data: null,
      active: 0,
      term: ''
    };
  }

  componentWillMount() {
    fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      .then((res) => {
        res.json().then((data) => {
          this.setState({
            data: data
          })
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  updateData(config: any) {
    this.setState(config);
  }

  render() {
    return(
    <div className="col-sm-8 col-md-9 col-lg-10">
            <UserList data={this.state.data} update={this.updateData.bind(this)} />
    </div>
    )
  }
}