package com.nahuel.service.impl;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.nahuel.service.Service;

public class BaseService<T, ID extends Serializable> implements Service, MongoRepository<T, ID> {

	protected MongoRepository<T, String> crud;

	@Override
	public <S extends T> List<S> save(Iterable<S> entites) {
		return this.crud.save(entites);
	}

	@Override
	public List<T> findAll() {
		return this.crud.findAll();
	}

	@Override
	public List<T> findAll(Sort sort) {
		return this.crud.findAll(sort);
	}

	@Override
	public Page<T> findAll(Pageable pageable) {
		return this.crud.findAll(pageable);
	}

	public <S extends T> S save(S entity) {
		return this.crud.save(entity);
	}

	@Override
	public T findOne(ID id) {
		return this.crud.findOne((String) id);
	}

	@Override
	public boolean exists(ID id) {
		return this.crud.exists((String) id);
	}

	@SuppressWarnings("unchecked")
	@Override
	public Iterable<T> findAll(Iterable<ID> ids) {
		return this.crud.findAll((Iterable<String>) ids);
	}

	@Override
	public long count() {
		return this.crud.count();
	}

	@Override
	public void delete(ID id) {
		this.crud.delete((String) id);
	}

	@Override
	public void delete(T entity) {
		this.crud.delete(entity);
	}

	@Override
	public void delete(Iterable<? extends T> entities) {
		this.crud.delete(entities);
	}

	@Override
	public void deleteAll() {
		this.crud.deleteAll();
	}

}
