
import React, {useEffect, useState} from "react";
import { Table } from "reactstrap";
import axios from "axios";

import AmbulanceList from "./AmbulanceList"
import AmbulanceModal from "./AmbulanceModal";
import AmbulanceForm from "./AmbulanceForm";
import RemovalAmbulance from "./RemovalAmbulance";
import Emergencyheader from "../../Emergencyheader";
import EMTLicense from "../EMT/EMTLicense"
function EmergencyVehicles() {
    const [vehicles,setVehicles]= useState([]);


  useEffect(() => {

        resetState();
    },[]);

   const resetState = () => {
  //  axios.get(EmergencyVehicle_URL).then(res => setVehicles( res.data));
  };
    return (

      <div>
     <Emergencyheader />
      <Table  border="1" cellspacing="0" cellpadding="5" >
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
            <th> Color </th>
           
          </tr>
        </thead>
        <tbody>
          {!vehicles || vehicles.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No Ambulance yet.</b>
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
                <td> {vehicle.Price} </td>
                <td> {vehicle.Color} </td>
                
                <td align="center">
                  <AmbulanceModal
                    create={false}
                    resetState={resetState}
                   
                  />
                  &nbsp;&nbsp;
                  <RemovalAmbulance
                    pk={vehicle.pk}
                    
                  />
                 
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      
                  <AmbulanceModal
                    create={true}
                    resetState={resetState}
                 />
                  <EMTLicense />
     </div>
   
    );
 
}


export default EmergencyVehicles;

