import React, {useEffect, useState} from "react";
import { Table } from "reactstrap";
import axios from "axios";
import { Customer_URL } from "../constants";
function Customer (props) {
      const [customers,setCustomers]= useState([]);


  useEffect(() => {

        resetState();
    },[]);

        const resetState = () => {
        console.log(Customer_URL)
        axios.get(Customer_URL).then(res => {
          setCustomers(res.data)
        
        });
    };



  

   
    return (
      <Table dark border="1" cellspacing="0" cellpadding="5" >
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>date_created</th>
           
          </tr>
        </thead>
        <tbody>
          {!customers || customers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No customers yet.</b>
              </td>
            </tr>
          ) : (
            customers.map(customer => (
              <tr key={customer.pk}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.date_created}</td>
              
              </tr>
            ))
          )}
        </tbody>
      </Table>
      
    );
  
}

export default Customer;