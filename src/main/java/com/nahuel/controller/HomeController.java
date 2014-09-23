package com.nahuel.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/home")
public class HomeController extends BaseController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public @ResponseBody ModelAndView greeting() {
		return new ModelAndView("home");
	}
	
}
