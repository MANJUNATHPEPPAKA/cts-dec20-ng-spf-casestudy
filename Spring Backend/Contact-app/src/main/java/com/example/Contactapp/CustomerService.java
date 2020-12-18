package com.example.Contactapp;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository contactsdao;
	
	public List<Customer> fetchallDetails() {
		List<Customer> contacts = contactsdao.findAll();
		return contacts;
	}
	
	public Customer addUser(Customer contacts) {
		contactsdao.save(contacts);
		return contacts;
	}
	
	
	
	
	public List<Customer> fetchContactsByUser(int profileId) {
		List<Customer> contacts = fetchallDetails();
		List<Customer> contactsByUser = contacts.stream().
				filter(item -> item.getProfileid() == profileId).
				collect(Collectors.toList());
		return contactsByUser;
		
	}
	
	public Customer Login(int id,String Password) {
		Customer cus = fetchUser(id);
		if((cus.getPassword().equals(Password))) {
			return cus;
		}
			else {
				return null;
		}
	}
	public Customer fetchUser(int id){
		Optional<Customer> option = contactsdao.findById(id);
		if(option.isPresent()) 
			return option.get();
		else
			return null;
	}
}
	
	
	
	

