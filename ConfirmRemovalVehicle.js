import React, { Fragment,useState } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { Vehicle_URL } from "../constants";

function ConfirmRemovalVehicle (props){
  const [modal,setModal]=useState(false);

  const OpenModal = () => {
    setModal(!modal);
  };

  const deleteVehicle = pk => {
    axios.delete(Vehicle_URL + props.pk).then(() => {
    
    OpenModal();
    });
  };

  
    return (
      <Fragment>
        <Button color="danger" onClick={() => OpenModal()}>
          Remove
        </Button>
        <Modal isOpen={modal} >
          <ModalHeader >
            Do you really want to delete the vehicle?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={() => OpenModal()}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => deleteVehicle()}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  
};

export default ConfirmRemovalVehicle;