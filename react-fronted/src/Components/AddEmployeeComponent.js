import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../Services/EmployeeService'

function AddEmployeeComponent() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()
  const saveorUpdateEmployee = (e) => {
    e.preventDefault()
    const employee = { firstName, lastName, emailId }
    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((response) => {
          console.log(response.data)
          navigate('/')
        })
        .catch((error) => console.log(error))
    } else {
      EmployeeService.createEmployee(employee)
        .then((response) => {
          console.log(response.data)
          navigate('/')
        })
        .catch((error) => console.log(error))
    }
  }

  const Title = () => {
    if (id) return <h2 className="text-center my-2">Update Employee</h2>
    return <h2 className="text-center my-2">Add Employee</h2>
  }

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((response) => {
        setFirstName(response.data.firstName)
        setLastName(response.data.lastName)
        setEmailId(response.data.emailId)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 ">
            {Title()}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> First Name :</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Last Name :</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Email Id :</label>
                  <input
                    type="email"
                    placeholder="Enter email Id"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveorUpdateEmployee(e)}>
                  Submit
                </button>
                {/* <Link to="/employees" className="btn btn-danger">
                  {' '}
                  Cancel{' '}
                </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddEmployeeComponent
