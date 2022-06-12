package com.api.empApi;

import com.api.empApi.Repository.EmployeeRepository;
import com.api.empApi.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication

public class EmpApiApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(EmpApiApplication.class, args);
	}
	@Autowired
	private EmployeeRepository employeeRepository;
	@Override
	public void run(String... args) throws Exception {
//		this run method executes whenever spring boot starts for the first time
//		Employee employee = new Employee();
//
//		employee.setEmailId("temp@gmail.com");
//		employee.setFirstName("Anugam");
//		employee.setLastName("Siddhartha");
//		employeeRepository.save(employee);
//
//		Employee employee1 = new Employee();
//
//		employee1.setEmailId("temp1@gmail.com");
//		employee1.setFirstName("Sidcap");
//		employee1.setLastName("Man");
//		employeeRepository.save(employee1);
	}
}
