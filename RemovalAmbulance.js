import React, { Fragment,useState } from "react";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";

import axios from "axios";
import AmbulanceForm from './AmbulanceForm';


function RemovalAmbulance (props){
  const [modal,setModal]=useState(false);

  const toggle = () => setModal(!modal);
 

  /*const deleteVehicle = pk => {
    axios.delete(Vehicle_URL + props.pk).then(() => {
    props.resetState();
   toggle();
    });
  };*/

  
    return (
      <Fragment>
        <Button color="danger" onClick={() => toggle()}>
          Remove
        </Button>
        <Modal isOpen={modal} >
          <ModalHeader >
            Do you really want to delete the vehicle?
          </ModalHeader>

          <ModalFooter>
            <Button type="button" onClick={() => toggle()}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              //onClick={() => deleteVehicle()}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  
};

export default RemovalAmbulance;

