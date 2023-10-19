import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
export default function UpdateProfile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Profile
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField margin="normal" required fullWidth name="name" label="Name" type="text" id="password" />
          <TextField margin="normal" required fullWidth name="mobile" label="Phone" type="text" id="password1" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
