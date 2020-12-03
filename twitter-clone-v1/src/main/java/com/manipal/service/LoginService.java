package com.manipal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manipal.model.Login;
import com.manipal.repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;
	
	public void addLoginDetails(Login login) {
		loginRepository.save(login);
	}
	
	public boolean loginValidation(Login login) {
		
		Login loginInfo = loginRepository.findByUserName(login.getUserName());
		String password = loginInfo.getPassword();
		if(password.equals(login.getPassword()))
			return true;
		else
			return false;
	}
}