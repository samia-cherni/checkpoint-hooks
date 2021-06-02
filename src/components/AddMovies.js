import React, { useState } from "react";
import { Modal, Button, Form,FormControl } from "react-bootstrap";

const AddMovies = ({Add,setRate,setSearch}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleReset =()=> {setShow(false);
  setRate("0");
  setSearch("");
  }
  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailer:""
  });
  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.id]: e.target.value });
  };
  return (
    <div>
      <Button className="m-3 add-movies" variant="secondary" onClick={handleShow}>
        Add Movies
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Title</Form.Label>
                <FormControl
                  placeholder="Enter movie title"
                  id="title"
                  onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <FormControl
                  placeholder="Enter description"
                  id="description"
                  onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <Form.Group>
              <Form.Label>Poster URL</Form.Label>
              <FormControl
                  placeholder="Enter poster url"
                  id="posterURL"
                  onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <FormControl
                  placeholder="Enter rating"
                  id="rating"
                  onChange={(e) => handleChange(e)}
                />
            </Form.Group>
            <Form.Group>
              <Form.Label>Trailer</Form.Label>
              <FormControl
                  placeholder="Enter Trailer link"
                  id="trailer"
                  onChange={(e) => handleChange(e)}
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleReset}>
            Close
          </Button>
          <Button variant="outline-success" onClick={()=>Add(newMovie)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovies;
