package com.nahuel.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.nahuel.domain.Todo;
import com.nahuel.repository.TodoRepository;
import com.nahuel.service.Service;

public class TodoService extends BaseService<Todo, String> implements Service<Todo, String> {
	
	@Autowired
	public TodoRepository crud;
	
}
