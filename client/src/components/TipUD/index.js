import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./index.css";
import { UPDATE_TRANSACTION, REMOVE_TRANSACTION } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

const TipUD = (props) => {
  const { className } = props;
  const [amount, setAmount] = useState("");
  const [modal, setModal] = useState(true);
  const [updateTransaction, { error, data }] = useMutation(UPDATE_TRANSACTION);
  const [transactionID, setTransactionID] = useState(props.transID);
  const [removeTransaction] = useMutation(REMOVE_TRANSACTION, {
    variables: {
      _id: props.transID
    }
  })

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
      _id: transactionID,
      amount: parseFloat(amount),
    }
    try {
      const { data } = await updateTransaction({
        variables: tip ,
      });
    } catch (error) {
      console.error(error);
    }
    window.location.reload()
  };

  const deleteTransaction = () => {
    try{
      removeTransaction()
    } catch(err){
      console.error(err);
    }
    window.location.assign('/')
  }

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
              placeholder="Enter new tip amount"
            />
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              type="submit"
              className="tip-submit-btn" 
            >
              Update Tip
            </Button>
            <Button
              color="danger"
              onClick={deleteTransaction}
              className="tip-delete-btn" 

            >
              Delete Tip
            </Button>
            <Button color="secondary" onClick={props.toggleShowModal}>
              Exit
            </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default TipUD;
