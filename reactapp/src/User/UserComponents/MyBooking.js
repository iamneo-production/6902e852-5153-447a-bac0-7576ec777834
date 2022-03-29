import React, { useEffect, useState } from "react";
import NavUser from "./NavUser";
import "../UserStyles/UserApp.css";

import axios from "axios";
import { Container, Modal } from "react-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import base_url from "../../api/bootapi";

function MyBooking() {
  const [bookList, setBookList] = useState([]);
  const [show, setShow] = useState(false);
  const [bookCenterById, setbookCenterById] = useState(null);
  const location = useLocation();
  const [deleteId, setDeleteId] = useState("");
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${base_url}/user/getUser?userId=${localStorage.getItem("userid")}`)

      .then(({ data }) => {
        console.log(data);
        setBookList(data);
        // console.log(state);
        console.log("good");
      });
  }, [load]);
  const handleUpdate = (book, ID) => {
    navigate(`/EditBooking?id=${book.id}`, { state: book });
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleDelete = (deleteId) => {
    axios
      .delete(`http://localhost:8080/deleteProducts/${deleteId}`)
      .then((data) => {
        setLoad(!load);
        setShow(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <NavUser />
      <div>
        <Container>
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Timmings</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                {bookList.map((value, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{value.productName}</td>
                      <td>{value.dateOfPurchase}</td>
                      <td>{value.availableSlots}</td>
                      <td>
                        <PencilSquare
                          onClick={() => {
                            handleUpdate(value, value.id);
                          }}
                        ></PencilSquare>
                      </td>
                      <td>
                        <Trash
                          onClick={() => {
                            setDeleteId(value.id);
                            setShow(true);
                          }}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Body>Confirm the delete operation</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => handleDelete(deleteId)}>
                Confrim
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    </div>
  );
}

export default MyBooking;
