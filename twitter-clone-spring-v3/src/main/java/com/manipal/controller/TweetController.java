package com.manipal.controller;

import java.time.LocalDateTime;
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

@CrossOrigin(origins = "http://localhost:4000")
@RestController
public class TweetController {

	@Autowired
	private TweetService tweetService;
	
	@GetMapping("/twitter/tweets")
	public List<Tweet> retriveAllTweets(){
		return tweetService.retrieveAllTweets();
	}
	
	@PostMapping("/twitter/tweet")
	public void addTweet(@RequestBody Tweet tweet) {
		tweet.setTweetCreationTime(LocalDateTime.now());
		tweetService.addOrUpdateTweet(tweet);
	}
	
	@GetMapping("/twitter/tweets/user/{userName}")
	public List<Tweet> retrieveTweetsByUserName(@PathVariable String userName){
		return tweetService.retrieveTweetsByUserName(userName);
	}
	
	@DeleteMapping("/twitter/tweets/{id}")
	public void deleteEmployee(@PathVariable int id){
		tweetService.deleteTweetById(id);
	}
	
	@GetMapping("/twitter/tweets/{id}")
	public Tweet getTweetById(@PathVariable int id) {
		return tweetService.retrieveTweetsByTweetId(id);
	}
	
	@PutMapping("/twitter/tweets/{id}")
	public void updateTweet(@PathVariable int id, @RequestBody Tweet tweetDetails){
		Tweet tweet = tweetService.retrieveTweetsByTweetId(id);
		
		tweet.setTweetBody(tweetDetails.getTweetBody());
		tweet.setTweetImage(tweetDetails.getTweetImage());
		
		tweetService.addOrUpdateTweet(tweet);
	}
	
	@PutMapping("/twitter/tweets/like/{id}")
	public void updateTweetLikes(@PathVariable int id, @RequestBody Tweet tweetDetails) {
		Tweet tweet = tweetService.retrieveTweetsByTweetId(id);
		tweet.setLikes(tweetDetails.getLikes());
		tweetService.addOrUpdateTweet(tweet);
	}
}
