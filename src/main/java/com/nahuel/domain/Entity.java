package com.nahuel.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "user")
public abstract class Entity {
	
	@Id
	protected String id;
	
}
