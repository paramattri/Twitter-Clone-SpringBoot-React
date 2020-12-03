package com.manipal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.manipal.model.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, String> {
	
	Login findByUserName(String userName);
}