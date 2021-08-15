import React,{useState} from 'react'
import { Table } from "reactstrap";
import paramedics from "../paramedics/Paramedics"
function EMTLicense() {
const[EMT,setEMT]=useState([])


    return (
        <div>
   <br/><br/>
   <h5 align="left">EMT  License Details</h5>
      <Table  border="1" cellspacing="0" cellpadding="5" >
        <thead>
        
          <tr>
          
            <th>Name</th>
            <th>Phone</th>
            <th>date_created</th>
            <th>License No.</th>
            <th>Expiration Date</th>
           
          </tr>
        </thead>
        <tbody>
          {
            EMT.map(emt => (
              <tr key={emt.pk}>
                <td>{emt.name}</td>
                <td>{emt.email}</td>
                <td>{emt.phone}</td>
                <td>{emt.date_created}</td>
              
              </tr>
            )
          )}
        </tbody>
      
      </Table>
     
     </div>
    );
}

export default EMTLicense
