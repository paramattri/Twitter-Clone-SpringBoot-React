package com.manipal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manipal.model.User;

public interface UserRepository extends JpaRepository<User, String>{
	User findByUserName(String userName);
}
