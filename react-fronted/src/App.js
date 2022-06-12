import './App.css'
import ListEmployeesComponent from './Components/ListEmployeesComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddEmployeeComponent from './Components/AddEmployeeComponent'
import GetEmployeeComponent from './Components/GetEmployeeComponent'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListEmployeesComponent />} />
        <Route path="/add-employee" element={<AddEmployeeComponent />} />
        <Route path="/:id" element={<GetEmployeeComponent />} />
        <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
      </Routes>
    </Router>
  )
}

export default App
