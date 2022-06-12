package com.api.empApi.controllers;

import com.api.empApi.Repository.EmployeeRepository;
import com.api.empApi.exceptions.ResourceNotFoundException;
import com.api.empApi.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping()
    public List<Employee> getAllEmployee()
    {
        return employeeRepository.findAll();
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id)
    {
        Employee employee=employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Element with given id doesnot present"));
        return new ResponseEntity(employee,HttpStatus.OK);
    }

    @PostMapping()
    public Employee createEmployee(@RequestBody Employee employee)
    {
        return employeeRepository.save(employee);
    }

    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id,@RequestBody Employee employeeDetails)
    {
        Employee updatedEmployee=employeeRepository.findById(id).orElseThrow(()->new RuntimeException("Given id is not present"));
        updatedEmployee.setFirstName(employeeDetails.getFirstName());
        updatedEmployee.setLastName(employeeDetails.getLastName());
        updatedEmployee.setEmailId(employeeDetails.getEmailId());
        employeeRepository.save(updatedEmployee);
        return new ResponseEntity(updatedEmployee, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable long id)
    {
        Employee deleteEmployee=employeeRepository.findById(id).orElseThrow(()->new RuntimeException("Given id is not present"));

        employeeRepository.delete(deleteEmployee);
        return new ResponseEntity( HttpStatus.NO_CONTENT);
    }
}
