package com.example.Contactapp;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;





@RestController
@CrossOrigin(origins="*")
public class CustomerController {

	
	
	@Autowired
	private CustomerService customerservice;
	@GetMapping
	public java.util.List<Customer> getAllCustomers(){
		return customerservice.fetchallDetails();
	}
	@GetMapping("/user/{id}")
	public java.util.List<Customer> getCustomerbyId(@PathVariable("id") int profileId) {
		return customerservice.fetchContactsByUser(profileId);
	}
	/*
	@PostMapping("/delete/id")
	public List deleteCustomerbyId(@PathVariable("id") int profileId){
			return customerservice.
		
	}
	
	@GetMapping("/user/{id}/{username}/{date}")
	public java.util.List<Customer> addUser(@PathVariable("id") int profileId ,@PathVariable("username") String u,@PathVariable("date") Date dat) {
		Customer c=new Customer(profileId,u,dat);
		return customerservice.addUser(c);
	}
	*/
	
	
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE,produces =MediaType.APPLICATION_JSON_VALUE )
	public ResponseEntity<Object> addCustomer(@RequestBody Customer c)
	{
		ResponseEntity<Object> response = null;
		try {
		Customer addUser = customerservice.addUser(c);
			response = ResponseEntity.status(200).body(addUser);
			System.out.println("User added");
		} catch (Exception e) {
			System.out.println("USer added failed");
		}
		return response;
	}
	@PostMapping(value="/login/{id}/{password}",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> Login(@PathVariable("id") int profileId,@PathVariable("password") String Password)
	{
		ResponseEntity<Object> response = null;
		try {
			Customer c = customerservice.Login(profileId,Password);
			response = ResponseEntity.status(200).body(c);
			System.out.println("Login");
		} catch (Exception e) {
			System.out.println("Login failed");
		}
		return response;
	}
}