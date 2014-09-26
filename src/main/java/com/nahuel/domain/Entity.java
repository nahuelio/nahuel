package com.nahuel.domain;

import org.springframework.data.annotation.Id;

public abstract class Entity {
	
	@Id
	protected String id;
	
}
