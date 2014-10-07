package com.nahuel.domain;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "todo")
public class Todo extends Entity {
	
	private String name;
	
	public Todo() {
		this.name = "Unnamed";
	}
	
	public Todo(String name) {
		this.name = name;
	}
	
	/**
	 * @return the name
	 */
	public String getName() {
		return this.name;
	}
	
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	
}
