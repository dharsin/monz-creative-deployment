import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='enquire-btn' onClick={handleShow}>
        Enquire Now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Enquiry form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control mb-3 enquiry-form-ip"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-control mb-3"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="form-control mb-3"
                  required
                />
                <textarea
                  rows="3"
                  placeholder="Your Message"
                  className="form-control mb-3"
                ></textarea>

                <Button type="submit" className="submit-btn" variant="danger">
                  Submit
                </Button>
              </form>
        </Modal.Body>
      
      </Modal>
    </>
  );
}

export default Example;