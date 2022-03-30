import React, { useEffect, useState } from "react";
import NavUser from "./NavUser";
import "../UserStyles/UserApp.css";

import axios from "axios";
import { Container, Modal } from "react-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import base_url from "../../api/bootapi";
import { FaStar } from "react-icons/fa";
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
  const today = new Date();
   const currentMonth =  today.getMonth()+1

   //check whether current month is single digit or not 
   // Is signle digit add 0 before month digit -- since in booked Date from form - getting 03
   const Length = currentMonth.toString().length;
   let thisMonth = "";
   if(Length === 1){
     thisMonth = "0"+ currentMonth.toString();
   }
   else
    thisMonth = currentMonth;
      //Calculate todays date & current time
   const currentDate = `${today.getFullYear()}-${thisMonth}-${today.getDate()}`;
   const currentTime = today.getHours() + ':' + today.getMinutes();

   function onReviewClick(bookedDate , bookedTime){
     console.log("Current date & Current Time :" ,currentDate," ", currentTime)
     console.log("Booked Date  &  Booked Time :",bookedDate," ",bookedTime)
    if(currentDate === bookedDate ){
      if(currentTime >= bookedTime){
            setDisplay(true); 
            console.log("Review Button Enabled -- Current book same date")
        }
        else{
            alert("You can Review After provided Time Slot .. ")
            console.log(" Review Button Disabled -- Current book same date")
        }
      }
      else if (currentDate > bookedDate){
          setDisplay(true); 
          console.log("Review Button Enable")
      }
      else{ 
          alert("You can Review After provided Time Slot .. ")
          console.log("Review Button Disable")
      }
  }

  const colors = {
    orange: "#0000FF",
    grey: "#a9a9a9"
    
  };
  //const [reviewId , setReviewId]= useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
  const [display, setDisplay] = useState(false);
  const[contentmsg,setContent] = useState("");
  const[p_id ,setBookingId] = useState(0)

  const handleClick = value => {
    setCurrentValue(value)
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const handleReviewClose = () => {
    setDisplay(false);
  };

  function handleReviewSubmit(data) {
    //console.log({currentValue},{content})
    const rating = currentValue;
    const content = contentmsg;
    
    data = {p_id,rating,content, userId: localStorage.getItem("userid") };
    axios.post(`${base_url}/addReview`, data,{
      headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }).then(
      (response) => {
        console.log("Rated ",response.data);
        setDisplay(false);
      },
      (error) => {
        console.log(error);
        console.log("error");
      }
    );
  }
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
                  <th>Rate</th>
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
                      <td>
                          <Button variant="danger" onClick={() => {
                          
                          setBookingId(value.id)  //Product Booking Id
                          onReviewClick(value.dateOfPurchase,value.availableSlots);  
                        }}>Review</Button>

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
      <div>
        
        <Modal show={display} onHide={handleReviewClose}>
            <Modal.Body>
                <div style={styles.container}>
                <h2> Customer Review </h2>
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                    return (
                        <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={(hoverValue || currentValue) > index ? colors.blue : colors.grey}
                        style={{
                            marginRight: 10,
                            cursor: "pointer"
                        }}
                        
                        />

                    )
                    })}
                </div>
                <textarea
                    placeholder="We would love to hear about your experience"
                    onChange={(e) => setContent(e.target.value)}
                    style={styles.textarea}
                   
                />
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleReviewClose}>
                Not now
              </Button>

              <Button variant="primary" onClick={() => handleReviewSubmit()} >
                Submit
              </Button>
              
            </Modal.Footer>
        </Modal>
    </div>
    </div>
  );
}

export default MyBooking;
