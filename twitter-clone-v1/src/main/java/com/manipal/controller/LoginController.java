package com.manipal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.manipal.model.Login;
import com.manipal.service.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired
	private LoginService loginService;
	
	@PostMapping("/twitter/login")
	public String login(@RequestBody Login login) {
	
		boolean isValidated = loginService.loginValidation(login);
		if(isValidated) {
			//CurrentUserNameUtil.setCurrentUserName(login.getUserName());
			return "Success";
		}
		else
			return "Not Success";
	}

}
