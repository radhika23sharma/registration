import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreateTeacher extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeTeacherName = this.onChangeTeacherName.bind(this);
    this.onChangeTeacherid = this.onChangeTeacherid.bind(this);
    this.onChangeTeacherclass_section = this.onChangeTeacherclass_section.bind(
      this
    );

    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      teacherid: "",
      class_section: "",
    };
  }

  onChangeTeacherName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeTeacherid(e) {
    this.setState({ teacherid: e.target.value });
  }

  onChangeTeacherclass_section(e) {
    this.setState({ class_section: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const teacherObject = {
      name: this.state.name,
      teacherid: this.state.teacherid,
      class_section: this.state.class_section,
    };

    axios
      .post("http://localhost:8080/teachers/create-teacher", teacherObject)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      teacherid: "",
      class_section: "",
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
              onChange={this.onChangeTeacherName}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Teacher ID</Form.Label>
            <Form.Control
              type="text"
              value={this.state.teacherid}
              onChange={this.onChangeTeacherid}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Class and Section</Form.Label>
            <Form.Control
              type="text"
              value={this.state.class_section}
              onChange={this.onChangeTeacherclass_section}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Add Teacher
          </Button>
        </Form>
      </div>
    );
  }
}
