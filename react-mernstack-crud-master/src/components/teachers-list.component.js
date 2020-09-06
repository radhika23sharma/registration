import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TeacherTableRow from "./TeacherTableRow";

export default class TeachersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/teachers/")
      .then((res) => {
        this.setState({
          teachers: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.teachers.map((res, i) => {
      return <TeacherTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Teacher ID</th>
              <th>Class and Section</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
