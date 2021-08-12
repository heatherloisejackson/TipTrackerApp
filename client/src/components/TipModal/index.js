import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./index.css";
import { QUERY_TRANSACTIONS } from "../../utils/queries";
import { ADD_TRANSACTION } from "../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";
import decode from 'jwt-decode';

const TipEntry = (props) => {
  const { className } = props;
  const [amount, setAmount] = useState("");
  const [modal, setModal] = useState(true);
  const [addTransaction, { error, data }] = useMutation(ADD_TRANSACTION);

  const handleChange = (event) => {
    const { value } = event.target;

    setAmount(value);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const handleDateClick = (e) => {
    e.preventDefault();
    console.log();
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    props.toggleShowModal(false);
    const id = decode(localStorage.getItem('id_token'))
    const tip = {
      _id: id.data._id,
      amount: parseFloat(amount),
      date: moment(props.date).format("MM-DD-YYYY")
    }
    try {
      const { data } = await addTransaction({
        variables: { ...tip },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={props.toggleShowModal}
        className={className}
      >
        <ModalHeader toggle={toggle} date={props.date}>
          Enter Tips
        </ModalHeader>
        <div>{props.value}</div>
        <form onSubmit={handleSubmit}>
          <ModalBody>
            <label htmlFor="amount">$</label>
            <input
              className="tip-entry"
              type="text"
              id="amount"
              name="amount"
              onChange={handleChange}
              placeholder="Enter Tip Here"
            />
          </ModalBody>

          <ModalFooter>
            {/*//? when onClick is uncommented 'Submit Tips' will not log to console but now modal will not close until 'Exit' BTN is clicked */}
            <Button
              color="primary"
              type="submit" /* onClick={props.toggleShowModal} */
            >
              Submit Tips
            </Button>
            {/* {' '} */}
            <Button color="secondary" onClick={props.toggleShowModal}>
              Exit
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default TipEntry;
