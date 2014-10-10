package com.nahuel.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class BaseController {
	
	protected final static Logger log = LoggerFactory.getLogger(BaseController.class);
	
	private String title = "Welcome to Nahuel - Social Network Experiment | ";
	
	private String[] layers = {"model", "view", "service", "controller"};
	
	/**
	 * Build and return requirejs client dependencies to initialize the view given a page request
	 * @param page
	 * @return
	 * @throws JsonProcessingException
	 */
	public String mvc(String page) {
		if(page == null || page == "") return "";
		try {
			List<String> mvc = new ArrayList<String>();
			for(String layer : Arrays.asList(layers))
				mvc.add((layer + "/" + page + "/" + layer));
			return new ObjectMapper().writeValueAsString(mvc);
		} catch(JsonProcessingException ex) {
			log.error(ex.getMessage());
			return null;
		}
	}
	
	public ModelAndView createModelAndView(String viewName, String page, String section) {
		ModelAndView mv = new ModelAndView(viewName);
		mv.addObject("title", this.title);
		mv.addObject("section", section);
		mv.addObject("mvc", this.mvc(page));
		return mv;
	}
	
}
