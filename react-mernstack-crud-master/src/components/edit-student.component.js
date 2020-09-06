import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onChangeStudent_class = this.onChangeStudent_class.bind(this);
    this.onChangeSection = this.onChangeSection.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: "",
      rollno: "",
      student_class: "",
      section: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/students/edit-student/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          rollno: res.data.rollno,
          student_class: res.data.student_class,
          section: res.data.section,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value });
  }

  onChangeStudent_class(e) {
    this.setState({ student_class: e.target.value });
  }
  onChangeSection(e) {
    this.setState({ section: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      name: this.state.name,
      rollno: this.state.rollno,
      student_class: this.state.student_class,
      section: this.state.section,
    };

    axios
      .put(
        "http://localhost:8080/students/update-student/" +
          this.props.match.params.id,
        studentObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/student-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Roll No</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeStudentRollno}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              value={this.state.student_class}
              onChange={this.onChangeStudent_class}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Section</Form.Label>
            <Form.Control
              type="text"
              value={this.state.section}
              onChange={this.onChangeSection}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Update Student
          </Button>
        </Form>
      </div>
    );
  }
}
