import React from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function PopUpForm(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="hero-form">
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="tel" placeholder="Enter Mobile Number" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="email" placeholder="Enter Your Email Id" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Enter Your Interested Course" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Select defaultValue="">
              <option value="" disabled>
                Preferred Branch
              </option>
              <option value="Coimbatore - Gandhipuram">Coimbatore - Gandhipuram</option>
              <option value="Coimbatore - Malumichampatti">Coimbatore - Malumichampatti</option>
              <option value="Coimbatore - Saravanampatti">Coimbatore - Saravanampatti</option>
              <option value="Tiruppur">Tiruppur</option>
              <option value="Chennai - Vadapalani">Chennai - Vadapalani</option>
              <option value="Chennai - Velachery">Chennai - Velachery</option>
              <option value="Chennai - Tambaram">Chennai - Tambaram</option>
              <option value="Chennai - Poonamallee">Chennai - Poonamallee</option>
              <option value="Chennai - Ambattur">Chennai - Ambattur</option>
              <option value="Chennai - Guduvancheri">Chennai - Guduvancheri</option>
              <option value="Kanchipuram">Kanchipuram</option>
              <option value="Bangalore - Marathahalli">Bangalore - Marathahalli</option>
              <option value="Bangalore - Bommasandra">Bangalore - Bommasandra</option>
              <option value="Hosur">Hosur</option>
            </Form.Select>
          </Form.Group>

          <Button className="submit-btn w-100" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
