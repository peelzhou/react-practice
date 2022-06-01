import React, { Component } from "react";
import { Table, Divider, Tag } from 'antd';
import axios from "axios";

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    }
  ];

  const data = [
    {
      
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      
      name: 'Jim Green',
      age: 42,
      address: 'New York No. 1 Lake Park'
    },
    {
      
      name: 'Joe Black',
      age: 32,
      address: 'New York No. 1 Lake Park'
    }
  ];

class MyTable extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     data: [],
    //   };
    // }
  
    render() {
      return (
        // console.log(this.state.data)
        <Table className="myTable" columns={columns} dataSource={data} />
      );
    }
  
//     componentDidMount() {
//       axios.get("http://localhost:3030/todos").then((res) => {
//       //   this.setState({
//       //     data: res.data.data,
//       //   });
//           console.log(res.data.data)
//       });
//     }
  }
  
  export default MyTable;
