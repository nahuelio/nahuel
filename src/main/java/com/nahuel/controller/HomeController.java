package com.nahuel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.nahuel.service.impl.UserService;

@Controller
@RequestMapping("/home")
public class HomeController extends BaseController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/index", method = RequestMethod.GET)
	public @ResponseBody ModelAndView home() {
		ModelAndView mv = new ModelAndView("home");
		mv.addObject("title", "Home");
		mv.addObject("users", this.userService.findAll());
		return mv;
	}
	
}
