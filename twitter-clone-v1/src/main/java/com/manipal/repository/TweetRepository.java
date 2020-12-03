package com.manipal.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.manipal.model.Tweet;


@Repository
public interface TweetRepository extends JpaRepository<Tweet, Integer>{

	List<Tweet> findByUserName(String userName);

	void deleteByTweet(String tweet);
	
	@Query(value = "SELECT tweet, COUNT(tweet) AS count FROM tweet GROUP BY tweet ORDER BY count DESC", nativeQuery = true)
	List<String> trendingTweets();
	
	@Query("SELECT t FROM Tweet t WHERE t.userName LIKE %?1% OR t.tweet LIKE %?1%")
	public List<Tweet> search(String keyword);

}