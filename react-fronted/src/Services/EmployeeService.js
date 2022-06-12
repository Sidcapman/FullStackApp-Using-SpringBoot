import axios from 'axios'
const base_url = 'http://localhost:8080/api/v1/employees'

class EmployeeService {
  getAllEmployees() {
    return axios.get(base_url)
  }
  createEmployee(employee) {
    return axios.post(base_url, employee)
  }
  getEmployeeById(employeeId) {
    return axios.get(base_url + '/' + employeeId)
  }
  updateEmployee(employeeId, employee) {
    return axios.put(base_url + '/' + employeeId, employee)
  }
  deleteEmployee(employeeId) {
    return axios.delete(base_url + '/' + employeeId)
  }
}

export default new EmployeeService()
