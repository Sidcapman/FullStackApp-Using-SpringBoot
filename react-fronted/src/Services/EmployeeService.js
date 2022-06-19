import axios from 'axios'

const base_url = process.env.REACT_APP_BASEURL
class EmployeeService {
  base_url = process.env.BASEURL
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
