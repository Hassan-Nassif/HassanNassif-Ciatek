import React from "react";
import { Table } from "reactstrap";
import AmbulanceModal from "./AmbulanceModal";
import EmergencyVehicles from "./EmergencyVehicles";
import RemovalAmbulance from "./RemovalAmbulance";

function AmbulanceList (props) {

   
    return (
      <Table dark>
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
            <th> Color</th>
           
          </tr>
        </thead>
        <tbody>
          {!props.vehicles || props.vehicles.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No Ambulance yet.</b>
              </td>
            </tr>
          ) : (
            props.vehicles.map(vehicle => (
              <tr key={props.vehicle.pk}>
                <td>{props.vehicle.Carname}</td>
                <td>{props.vehicle.Status}</td>
                <td>{props.vehicle.Model}</td>
                <td>{props.vehicle.Weight}</td>
                <td>{props.vehicle.Fueltype}</td>
                <td>{props.vehicle.Date_registered}</td>
                <td>{props.vehicle.License}</td>
                <td>{props.vehicle.Ownername}</td>
                <td>{props.vehicle.Platenumber}</td>
                <td>{props.vehicle.Price}</td>
                <td>{props.vehicle.Color}</td>
                <td>{props.vehicle.Actions}</td>
                <td align="center">
                  <AmbulanceModal
                    create={true}
                    vehicle={vehicle}
                   
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
    );
  
}

export default AmbulanceList;
