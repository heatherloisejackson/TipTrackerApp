import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './index.css';
import { QUERY_TRANSACTIONS } from '../../utils/queries';
import { ADD_TRANSACTION } from '../../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import moment from 'moment';

const TipEntry = (props) => {
  //const { loading, data } = useQuery(QUERY_TRANSACTIONS);
  //const { addTip } = useMutation(ADD_TIP);
  
  const [formState, setFormState] = useState({
    user: '',
    amount: '',
    date: '',
  });
  const [addTransaction, { error, data }] = useMutation(ADD_TRANSACTION);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTransaction({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
    }
  };

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => {
    setModal(!modal);
  };

  const [tip, setTip] = useState({
    date: null,
    amount: null,
  });

  const handleDateClick = (e) => {
    e.preventDefault();
    console.log()
  } ;

  const handleTipEntry = (e) => {
    e.preventDefault();
    setTip({
      //! remember to format date to match database / date currently displayed as "Aug 11th 21"
      date: moment(props.date).format('MMM Do YY'),
      amount: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.toggleShowModal(false);
    setTip(props.date,props.amount);
    //setTip(props.amount);
    console.log('Tip Entry: ', tip.amount);
    console.log('Date Entry: ', tip.date)
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={props.toggleShowModal} className={className}>
        <ModalHeader toggle={toggle} date={props.date}>Enter Tips</ModalHeader>
        <div>{props.value}</div>
        <form onSubmit={ handleSubmit } >

          <ModalBody>
              <label htmlFor="amount">$</label>
              <input className='tip-entry' type="text" id="amount" onChange={handleTipEntry} onSubmit={handleFormSubmit} placeholder='Enter Tip Here'/>
          </ModalBody>

          <ModalFooter>
           {/*//? when onClick is uncommented 'Submit Tips' will not log to console but now modal will not close until 'Exit' BTN is clicked */}
            <Button color="primary" type="submit"/* onClick={props.toggleShowModal} */>Submit Tips</Button>{/* {' '} */}
            <Button color="secondary" onClick={props.toggleShowModal}>Exit</Button>
          </ModalFooter>

        </form>
      </Modal>
    </div>
  );
}

export default TipEntry;
