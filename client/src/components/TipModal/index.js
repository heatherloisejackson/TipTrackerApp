// ADD-TIP MODEL COMPONENT

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./index.css";
import { ADD_TRANSACTION } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import moment from "moment";


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.toggleShowModal(false);
    const tip = {
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
              type="submit" 
              className="tip-submit-btn"
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
