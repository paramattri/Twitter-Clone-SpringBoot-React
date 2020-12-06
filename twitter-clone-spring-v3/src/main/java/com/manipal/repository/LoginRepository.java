package com.manipal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manipal.model.Login;

public interface LoginRepository extends JpaRepository<Login, String>{
	
	Login findByUserName(String userName);
}
