import React, {useEffect, useState} from "react";
import { Table } from "reactstrap";
import axios from "axios";
import { Vehicle_URL } from "../constants";
import VehicleList from "./VehicleList";
import NewVehicleModal from "./NewVehicleModal";
function Vehicle () {
      const [vehicles,setVehicles]= useState([]);


  useEffect(() => {

        resetState();
    },[]);

       

const resetState = () => {
    axios.get(Vehicle_URL).then(res => setVehicles( res.data));
  };

  

  

   
    return (
      <Table dark border="1" cellspacing="0" cellpadding="5" >
        <thead>
          <tr>
          
            <th> Carname </th>
            <th> Status </th>
            <th> Model </th>
            <th> Weight </th>
            <th> Fuel type </th>
            <th> Date_registered </th>
            <th> License </th>
            <th> Ownername </th>
            <th> Platenumber </th>
            <th> Price </th>
           
          </tr>
        </thead>
        <tbody>
          {!vehicles || vehicles.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No Vehicles yet.</b>
              </td>
            </tr>
          ) : (
            vehicles.map(vehicle => (
              <tr key={vehicle.pk}>
                <td> {vehicle.Carname} </td>
                <td> {vehicle.Status} </td>
                <td> {vehicle.Model} </td>
                <td> {vehicle.Weight} </td>
                <td> {vehicle.Fueltype} </td>
                <td> {vehicle.Date_registered} </td>
                <td> {vehicle.License} </td>
                <td> {vehicle.Ownername} </td>
                <td> {vehicle.Platenumber} </td>
                <td> {vehicle.price} </td>
                
                

              
              </tr>
            ))
          )}
        </tbody>
      </Table>
      
    );
  
}

export default Vehicle;