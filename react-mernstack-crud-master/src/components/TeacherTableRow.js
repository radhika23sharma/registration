import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class TeacherTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteTeacher = this.deleteTeacher.bind(this);
    // this.deleteClass_Section = this.deleteClass_Section(this);
  }

  deleteTeacher() {
    axios
      .delete(
        "http://localhost:8080/teachers/delete-teacher/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Teacher successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // deleteClass_Section() {
  //   axios
  //     .delete(
  //       "http://localhost:8080/teachers/delete-class-section/" +
  //         this.props.obj._id
  //     )
  //     .then((res) => {
  //       console.log("Class and Section successfully deleted!");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.teacherid}</td>
        <td>{this.props.obj.class_section}</td>

        <td>
          <Link
            className="edit-link"
            to={"/edit-teacher/" + this.props.obj._id}
          >
            Edit
          </Link>
          <Button onClick={this.deleteTeacher} size="sm" variant="danger">
            Delete
          </Button>

          {/* <div class="btn">
            <Button
              onClick={this.deleteClass_Section}
              size="sm"
              variant="danger"
            >
              Delete Class and Section
            </Button>
          </div> */}
        </td>
      </tr>
    );
  }
}
