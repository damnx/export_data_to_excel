import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormReadFile from '../src/components/FormReadFile';
import LoadingData from './components/LoadingData';
import XLSX from 'xlsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      check: 'nhap',
      data: {},
      inputs: {
        maSoThue: '',
        tenCongTy: '',
        diaChi: '',
        loaiPhieu: 'phieu-xuat',
      }
    }

  }
  render() {
    let { inputs, data } = this.state;
    return (
      <div className="login-block">
        <div className="container">
          <div className="row">
            <FormReadFile
              inputs={inputs}
              onChange={this.onChange}
            />
            <LoadingData
              inputs={inputs}
              data={data}
            />
          </div>
        </div>
      </div>
    );
  }

  onChange = (name, value) => {
    this.setState({
      ...this.state,
      [name]: value
    })
  }
}

export default App;
