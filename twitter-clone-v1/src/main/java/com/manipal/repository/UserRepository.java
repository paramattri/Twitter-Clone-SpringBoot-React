package com.manipal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.manipal.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{

}