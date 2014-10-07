package com.nahuel.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nahuel.domain.User;

public interface UserRepository extends MongoRepository<User, String> {
	
	User findByUsername(String username);
	
	User findByEmail(String email);
	
}
