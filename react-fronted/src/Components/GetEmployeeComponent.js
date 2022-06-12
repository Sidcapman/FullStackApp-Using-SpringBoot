import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'

export default function GetEmployeeComponent() {
  const [employees, setEmployees] = useState([])
  const { id } = useParams()
  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((response) => {
      setEmployees(response.data)
    })
  }, [])

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
                  <td>{employee.id}</td>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
