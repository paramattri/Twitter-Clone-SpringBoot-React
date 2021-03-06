package com.manipal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manipal.model.Tweet;

public interface TweetRepository extends JpaRepository<Tweet, Integer>{
	
	List<Tweet> findByUserName(String userName);
}
