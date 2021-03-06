package com.manipal.service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manipal.model.Tweet;
import com.manipal.repository.TweetRepository;

@Service
public class TweetService {
	
	@Autowired
	private TweetRepository tweetRepository;

	public List<Tweet> retrieveAllTweets(){
		
		List<Tweet> tweets = tweetRepository.findAll();
		Collections.sort( tweets, (Comparator<? super Tweet>) (t1, t2) -> {
			if(t1.getTweetCreationTime().isAfter(t2.getTweetCreationTime()))
				return -1;
			else
				return 1;
		});		
		return tweets;
	}
	
	public void addOrUpdateTweet(Tweet tweet) {
		tweetRepository.save(tweet);
	}
	
	public List<Tweet> retrieveTweetsByUserName(String userName) {
		
		List<Tweet> tweets = tweetRepository.findByUserName(userName);
		Collections.sort( tweets, (Comparator<? super Tweet>) (t1, t2) -> {
			if(t1.getTweetCreationTime().isAfter(t2.getTweetCreationTime()))
				return -1;
			else
				return 1;
		});
		
		return tweets;
	}
	
	public void deleteTweetById(int tweetId) {
		tweetRepository.deleteById(tweetId);
	}
	
	public Tweet retrieveTweetsByTweetId(int tweetId) {
		return tweetRepository.findById(tweetId).orElse(null);
	}
}
