package com.manipal.controller;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.manipal.model.Tweet;
import com.manipal.service.TweetService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TweetController {
	
	@Autowired
	private TweetService tweetService;
	
	@GetMapping("/twitter/tweets")
	public List<Tweet>retrieveAllTweets(){
		
		return tweetService.retrieveAllTweets();
	}
	
	@PostMapping("/twitter/tweet")
	public void addTweet(@RequestBody Tweet tweet) {
		tweet.setCreationTime(LocalDateTime.now());
		tweetService.addOrUpdateTweet(tweet);
	}
	
	@GetMapping("/twitter/tweets/{id}")
	public Tweet getTweetById(@PathVariable int id) {
		Tweet tweet = tweetService.retrieveTweetsByTweetId(id);
		return tweet;
	}
	
	@PutMapping("/twitter/tweets/{id}")
	public void updateTweet(@PathVariable int id, @RequestBody Tweet tweetDetails){
		Tweet tweet = tweetService.retrieveTweetsByTweetId(id);
		
		tweet.setTweet(tweetDetails.getTweet());
		
		tweetService.addOrUpdateTweet(tweet);
	}
	
	@DeleteMapping("/twitter/tweets/{id}")
	public void deleteEmployee(@PathVariable int id){
		tweetService.deleteTweetById(id);
	}
	
	@GetMapping("/twitter/trending")
	public LinkedHashMap<String, String> trendingTweets() {
		return tweetService.trendingTweets();
	}
	
	@GetMapping("/twitter/tweets/user/{userName}")
	public List<Tweet> retrieveTweetsByUserName(@PathVariable String userName){
		return tweetService.retrieveTweetsByUserName(userName);
	}
}
