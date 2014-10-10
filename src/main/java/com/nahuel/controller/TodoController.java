package com.nahuel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.nahuel.service.impl.TodoService;

@Controller
@RequestMapping("/todo")
public class TodoController extends BaseController {
	
	@Autowired
	private TodoService todoService;
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public @ResponseBody ModelAndView home() {
		return this.createModelAndView("core/page", "todos", "Todos");
	}
	
}
