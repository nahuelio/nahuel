package com.nahuel.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nahuel.domain.Todo;
import com.nahuel.service.impl.TodoService;

@RestController
@RequestMapping("api/todo")
public class TodoRestController {

	@Autowired
	private TodoService todoService;
	
	@RequestMapping(value = "/save", method = RequestMethod.PUT)
	public @ResponseBody Todo save(@PathVariable("todo") Todo todo) {
		return this.todoService.crud.save(todo);
	}
	
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	public @ResponseBody Todo delete(@PathVariable("id") Todo todo) {
		this.todoService.crud.delete(todo);
		return todo;
	}
	
	@RequestMapping(value = "/findAll", method = RequestMethod.GET)
	public @ResponseBody List<Todo> findAll() {
		return this.todoService.crud.findAll();
	}
	
	@RequestMapping(value = "/find", method = RequestMethod.POST)
	public @ResponseBody Todo findOne(@PathVariable("id") Todo todo) {
		return todo;
	}
	
}
