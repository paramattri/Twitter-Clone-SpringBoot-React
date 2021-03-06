package com.manipal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.manipal.model.Login;
import com.manipal.model.User;
import com.manipal.service.LoginService;
import com.manipal.service.UserService;

@CrossOrigin(origins = "http://localhost:4000")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/twitter/register")
	public String registration(@RequestBody User user) {
		
		String registrationResponse = userService.registation(user);
		if(registrationResponse.equals("Success")) {
			Login login = new Login();
			login.setUserName(user.getUserName());
			login.setPassword(user.getPassword());
			loginService.addLoginDetails(login);
			return registrationResponse;
		}
		
		return registrationResponse;
	}
	
	@GetMapping("/twitter/user/{userName}")
	public User userDetails(@PathVariable String userName){
		return userService.userDetails(userName);
	}

}
