package com.nahuel.repository;

import java.io.Serializable;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository<User, ID extends Serializable> extends MongoRepository<User, ID> {
	
}
