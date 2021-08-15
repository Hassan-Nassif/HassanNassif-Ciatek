import React,{useState,useEffect} from "react";

import EmergencyVehicles from "./EmergencyVehicles";
import axios from "axios";
import {  InputGroup, InputGroupAddon, InputGroupText,Input, Button, Form, FormGroup,  Label } from 'reactstrap';
import AmbulanceModal from './AmbulanceModal'


function AmbulanceForm (props) {
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
  const [Color,setColor]=useState('');
 
  

 const getvehicles = () => {
    //axios.get(EmergencyVehicle_URL).then(res => props.setVehicles( res.data));
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
       setColor(props.vehicle.Color);
       setColor(props.vehicle.Color);
       

    }
  },[]

  )

   const createVehicle = e => {
    e.preventDefault();
    console.log("hhhhhhhhhhhhhhhhhhhhhhh")
    //axios.post(EmergencyVehicle_URL , {Carname, Status,Model , Weight,Fueltype,License,Ownername,Platenumber,price:parseFloat(Price),Color}).then(() => {
     
     props.toggle();
    };
    console.log(Carname, Status,Model , Weight,Fueltype,License,Ownername,Platenumber,Price,Color)
  

  const editVehicle = e => {
    e.preventDefault();
    //axios.put(EmergencyVehicle_URL + pk,  {Carname, Status,Model , Weight,Fueltype,License,Ownername,Platenumber,Price,Color}).then(() => {
    
     props.toggle();
  };

  
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  

  

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
            type="name"
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
            type="number"
            name=" Price"
            onChange={e=> setPrice(e.target.value)}
            
          />
        </FormGroup>

         <FormGroup>
          <Label for="Color">Color:</Label>
          <Input
            type="text"
            name="color"
            onChange={e=> setColor(e.target.value)}
            
          />
        </FormGroup>


        <Button>Send</Button>
      </Form>
      
    );
  

};
export default AmbulanceForm
