import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { createTask } from "../api/taskApi";
import { useNavigate } from "react-router-dom";
const CreateNewTask = () => {
  const [formData, setFormData] = useState({
    name: "",
    user: localStorage.getItem("user") || "guest",
  });

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    createTask(formData);

    setFormData({
      name: "",
      user: localStorage.getItem("user") || "guest",
    });
    navigate("/");
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Task Title"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="user">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Author"
                disabled
                value={formData.user}
                onChange={(e) =>
                  setFormData({ ...formData, user: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default CreateNewTask;
