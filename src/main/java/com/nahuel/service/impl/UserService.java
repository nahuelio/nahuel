package com.nahuel.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.nahuel.domain.User;
import com.nahuel.repository.UserRepository;
import com.nahuel.service.Service;

public class UserService extends BaseService<User, String> implements Service<User, String> {
	
	@Autowired
	public UserRepository crud;
	
}
