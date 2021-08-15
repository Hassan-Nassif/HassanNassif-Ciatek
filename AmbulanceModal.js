import React, { Fragment,useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import AmbulanceForm from "./AmbulanceForm";
import EmergencyVehicles from './EmergencyVehicles';
function AmbulanceModal(props){
 const [modal,setModal] =useState(false) ;
const toggle= () => setModal(!modal);
 

    var title = "Editing Vehicle";
    var createbutton = <Button onClick={toggle}>Edit</Button>;
   
     

        if (props.create) {
      title = "Creating New Emergency Vehicle";

      createbutton = (
        <Button
          color="primary"
          className="float-right"
          onClick={toggle}
          style={{ minWidth: "200px" }}
        >
          Create New 
          
        </Button>
      );
      
    }



    return (
      <Fragment>
        {createbutton}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle} >{title}</ModalHeader>

          <ModalBody>
            <AmbulanceForm
              resetState={props.resetState}
              toggle={toggle}
              vehicle={props.vehicle}
            />
            
          </ModalBody>
        </Modal>
      </Fragment>
    );
  
};
export default AmbulanceModal
