//package com.manipal.util;
//
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//public class PasswordEncoderUtil {
//	
//	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//	
//	public BCryptPasswordEncoder getPasswordEncoder() {
//		return passwordEncoder;
//	}
//
//	public void setPasswordEncoder(BCryptPasswordEncoder passwordEncoder) {
//		this.passwordEncoder = passwordEncoder;
//	}
//
//	public String bCryptPasswordEncoder(String password) {	
//		String encodedPassword = passwordEncoder.encode(password);
//		System.out.println(encodedPassword);
//		return encodedPassword;
//	}
//}
