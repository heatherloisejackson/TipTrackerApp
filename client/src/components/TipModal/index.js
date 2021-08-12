import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./index.css";
import { QUERY_TRANSACTIONS } from "../../utils/queries";
import { ADD_TRANSACTION } from "../../utils/mutations";
import { useMutation, useQuery } from "@apollo/client";
import moment from "moment";

const TipEntry = (props) => {
  const { buttonLabel, className } = props;
  //const { loading, data } = useQuery(QUERY_TRANSACTIONS);
  //const { addTip } = useMutation(ADD_TIP);
  // const [tip, setTip] = useState({
  //   date: null,
  //   amount: null,
  // });
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

  // const handleTipEntry = (e) => {
  //   e.preventDefault();
  //   setTip({
  //     //! remember to format date to match database / date currently displayed as "Aug 11th 21"
  //     date: moment(props.date).format("MMM Do YY"),
  //     amount: e.target.value,
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.toggleShowModal(false);
    // setTip(moment(props.date).format("MMM Do YY"), amount);
    //setTip(props.amount);ß
    console.log("Tip Entry: ", amount);
    console.log("Date Entry: ", moment(props.date).format("MMM Do YY"));

    const tip = {
      username: "heatherjackson",
      amount: parseFloat(amount),
      date: moment(props.date).format("MMM Do YY")
    }

    try {
      const { data } = await addTransaction({
        variables: { ...tip },
      });

    } catch (e) {
      console.error(e);
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
