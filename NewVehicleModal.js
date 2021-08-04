import React, { Fragment,useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewVehicleForm from "./NewVehicleForm";
import Vehicle from "./Vehicle";
function NewVehicleModal(props){
 const [modal,setModal] =useState(false) ;

  const OpenModal = () => {
    setModal(!modal);
    
  };

    var title = "Editing Vehicle";
    var button = <Button onClick={OpenModal}>Edit</Button>;
   
      title = "Creating New Vehicle";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={OpenModal}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );


    return (
      <Fragment>
        {button}
        <Modal isOpen={modal} OpenModal={OpenModal}>
          <ModalHeader OpenModal={OpenModal}>{title}</ModalHeader>

          <ModalBody>
            <NewVehicleForm
              resetState={props.resetState}
              OpenModal={OpenModal}
              vehicle={props.vehicle}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  
};
export default NewVehicleModal