package com.nahuel.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nahuel.domain.User;
import com.nahuel.service.impl.UserService;

@RestController
@RequestMapping("/user")
public class UserRestController {

	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/save", method = RequestMethod.PUT)
	public @ResponseBody User save(@PathVariable("user") User user) {
		return this.userService.save(user);
	}
	
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	public @ResponseBody User delete(@PathVariable("id") User user) {
		this.userService.delete(user);
		return user;
	}
	
	@RequestMapping(value = "/findAll", method = RequestMethod.GET)
	public @ResponseBody List<User> findAll() {
		return this.userService.findAll();
	}
	
	@RequestMapping(value = "/find", method = RequestMethod.POST)
	public @ResponseBody User findOne(@PathVariable("id") User user) {
		return user;
	}
	
}
