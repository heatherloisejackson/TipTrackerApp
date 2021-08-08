import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './index.css';

const TipEntry = (props) => {
  let {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  buttonLabel = 'Enter Tips';
  
  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Enter Tips</ModalHeader>
        <ModalBody>
            <span className='p-1'>$</span>
            <input className='tip-entry' type="text" placeholder='Enter Tip Here'/>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Submit Tips</Button>{' '}
          <Button color="secondary" onClick={toggle}>Exit</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TipEntry;
