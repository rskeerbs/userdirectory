import React from "react";
import "../styles/table.css";

function Table(props){
    return(
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th onClick={props.handleSort}>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee=>{
                    return(
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td><img src={employee.image} alt="employee"/></td>
                            <td>{employee.name}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.email}</td>
                            <td>{employee.dob}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;