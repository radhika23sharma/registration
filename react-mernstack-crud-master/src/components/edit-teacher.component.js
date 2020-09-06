import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditTeacher extends Component {
  constructor(props) {
    super(props);

    this.onChangeTeacherName = this.onChangeTeacherName.bind(this);
    this.onChangeTeacher_id = this.onChangeTeacher_id.bind(this);
    this.onChangeTeacherclass_section = this.onChangeTeacherclass_section.bind(
      this
    );

    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: "",
      teacher_id: "",
      class_section: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:8080/teachers/edit-teacher/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          teacher_id: res.data.teacher_id,
          class_section: res.data.class_section,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeTeacherName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeTeacher_id(e) {
    this.setState({ teacher_id: e.target.value });
  }

  onChangeTeacherclass_section(e) {
    this.setState({ class_section: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const teacherObject = {
      name: this.state.name,
      teacher_id: this.state.teacher_id,
      class_section: this.state.class_section,
    };

    axios
      .put(
        "http://localhost:8080/teachers/update-teacher/" +
          this.props.match.params.id,
        teacherObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Teacher successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/teacher-list");
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
              value={this.state.teacher_id}
              onChange={this.onChangeTeacher_id}
            />
          </Form.Group>

          <Form.Group controlId="Name">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              value={this.state.class_section}
              onChange={this.onChangeTeacherclass_section}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Update Teacher
          </Button>
        </Form>
      </div>
    );
  }
}
