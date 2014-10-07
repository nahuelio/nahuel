package com.nahuel.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.nahuel.domain.Todo;

public interface TodoRepository extends MongoRepository<Todo, String> {
	
}
