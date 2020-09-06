import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onChangeStudent_class = this.onChangeStudent_class.bind(this);
    this.onChangeSection = this.onChangeSection.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      rollno: "",
      student_class: "",
      section: "",
      errors: {},
    };
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
      .post("http://localhost:8080/students/create-student", studentObject)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      rollno: "",
      student_class: "",
      section: "",
      errors: {},
    });
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
            <small>Roll Number must be a number</small>
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              value={this.state.student_class}
              onChange={this.onChangeStudent_class}
            />
            <small>Class must be between 1-12</small>
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Section</Form.Label>
            <Form.Control
              type="text"
              value={this.state.section}
              onChange={this.onChangeSection}
            />
            <small>Section must be between A-F</small>
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}
