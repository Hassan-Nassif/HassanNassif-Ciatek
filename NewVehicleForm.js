import React,{useState,useEffect} from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Vehicle from "./Vehicle";
import axios from "axios";
import { Vehicle_URL } from "../constants";


function NewVehicleForm (props) {
  const [pk,setpk]=useState(0);
  const [Carname,setCarname]=useState('');
  const [Status,setStatus]=useState('');
  const [Model,setModel]=useState('');
  const [Weight,setWeight]=useState('');
  const [Fueltype,setFueltype]=useState('');
  const [Date_registered,setDate_registered]=useState('');
  const [License,setLicense]=useState('');
  const [Ownername,setOwnername]=useState('');
  const [Platenumber,setPlatenumber]=useState('');
  const [Price,setPrice]=useState('');
  

 const getvehicles = () => {
    axios.get(Vehicle_URL).then(res => props.setvehicles( res.data));
  };

  const resetState = () => {
   getvehicles();
  };
  
  useEffect(()=>{
    if(props.vehicle){
       setpk(props.vehicle.pk);
       setCarname(props.vehicle.Carname);
       setStatus(props.vehicle.Status);
       setModel(props.vehicle.Model);
       setWeight(props.vehicle.Weight);
       setFueltype(props.vehicle.Fueltype);
       setDate_registered(props.vehicle.Date_registered);
       setOwnername(props.vehicle.License);
       setPlatenumber(props.vehicle.Ownername);
       setCarname(props.vehicle.Platenumber);
       setPrice(props.vehicle.Price);
       

    }
  },[]

  )

   const createVehicle = e => {
    e.preventDefault();
    
    axios.post(Vehicle_URL, {Carname, Status,Model , Weight,Fueltype,Date_registered,License,Ownername,Platenumber,Price}).then(() => {
     
     props.OpenModal();
    });
  };

  const editVehicle = e => {
    e.preventDefault();
    axios.put(Vehicle_URL + pk,  {Carname, Status,Model , Weight,Fueltype,Date_registered,License,Ownername,Platenumber,Price}).then(() => {
    
     props.OpenModal();
  });
  }
  

  return (
      <Form onSubmit={props.vehicle ? editVehicle : createVehicle}>

        <FormGroup>
          <Label for="name">Carname:</Label>
          <Input
            type="text"
            name="name"
            onChange={e=> setCarname(e.target.value)}
            
          />
        </FormGroup>

        <FormGroup>
          <Label for="email">Status:</Label>
          <Input
            type="text"
            name="Status"
            onChange={e=> setStatus(e.target.value)}
            
          />
        </FormGroup>

        <FormGroup>
          <Label for="Model">Model:</Label>
          <Input
            type="text"
            name="Model"
            onChange={e=> setModel(e.target.value)}
          
          />
        </FormGroup>

        <FormGroup>
          <Label for=" Weight">Weight:</Label>
          <Input
            type="text"
            name=" Weight"
            onChange={e=> setWeight(e.target.value)}
            
          />
        </FormGroup>

        <FormGroup>
          <Label for="Fueltype">Fueltype:</Label>
          <Input
            type="text"
            name=" Fueltype"
            onChange={e=> setFueltype(e.target.value)}
            
          />
        </FormGroup>

        <FormGroup>
          <Label for=" Date_registered">Date_registered:</Label>
          <Input
            type="text"
            name=" Date_registered"
            onChange={e=> setDate_registered(e.target.value)}
            
          />
        </FormGroup>

        <FormGroup>
          <Label for=" License">License:</Label>
          <Input
            type="text"
            name=" License"
            onChange={e=> setLicense(e.target.value)}
            
          />
        </FormGroup>

        <FormGroup>
          <Label for=" Ownername">Ownername:</Label>
          <Input
            type="text"
            name=" Ownername"
            onChange={e=> setOwnername(e.target.value)}
            
          />
        </FormGroup>

        <FormGroup>
          <Label for=" Platenumber">Platenumber:</Label>
          <Input
            type="text"
            name=" Platenumber"
            onChange={e=> setPlatenumber(e.target.value)}
            
          />
        </FormGroup>

        <FormGroup>
          <Label for=" Price">Price:</Label>
          <Input
            type="text"
            name=" Price"
            onChange={e=> setPrice(e.target.value)}
            
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  

};
export default NewVehicleForm