package com.nahuel.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nahuel.domain.User;

public interface UserRepository extends MongoRepository<User, String> {
	
	List<User> findByUsername(String username);
	
	List<User> findByEmail(String email);
	
}
