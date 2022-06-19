import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'
const base_url = 'http://localhost:8080/api/v1/employees'

export default function ListEmployeesComponent() {
  const [employees, setEmployees] = useState([])

  useEffect(() => {
    getAllEmployees()
  }, [])

  const getAllEmployees = () => {
    EmployeeService.getAllEmployees(base_url)
      .then((response) => {
        setEmployees(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  let index = 1

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id)
      .then(() => {
        getAllEmployees()
        console.log('deleted ' + id + ' element')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <div>
        <div className="container">
          <h2 className="text-center">List Employees</h2>
          <Link to="/add-employee" className="btn btn-primary mb-3">
            Add Employee
          </Link>
          <table className="table table-bordered table-stripped">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{index++}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <Link
                      to={`/edit-employee/${employee.id}`}
                      className="btn btn-info">
                      Update
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteEmployee(employee.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
