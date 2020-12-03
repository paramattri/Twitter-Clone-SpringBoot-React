package com.manipal.model;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="tweet")
public class Tweet {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int tweetId;
	private String userName;
	
	@NotBlank(message = "*Cannot Post Empty Tweet")
	@Size(max=300)
	private String tweet;

    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	private LocalDateTime creationTime;
	
	public Tweet() {}

	public Tweet(int tweetId, String userName, String tweet, LocalDateTime creationTime) {
		super();
		this.tweetId = tweetId;
		this.userName = userName;
		this.tweet = tweet;
		this.creationTime = creationTime;
	}

	public int getTweetId() {
		return tweetId;
	}

	public void setTweetId(int tweetId) {
		this.tweetId = tweetId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getTweet() {
		return tweet;
	}

	public void setTweet(String tweet) {
		this.tweet = tweet;
	}

	public LocalDateTime getCreationTime() {
		return creationTime;
	}

	public void setCreationTime(LocalDateTime creationTime) {
		this.creationTime = creationTime;
	}

}