package com.nahuel.service.impl;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nahuel.domain.User;

public class UserService extends BaseService<User, String> {
	
	public UserService(MongoRepository<User, String> crud) {
		this.crud = crud;
	}
	
}
