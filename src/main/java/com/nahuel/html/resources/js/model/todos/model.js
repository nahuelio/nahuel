/**
 *	@module com.nahuel.model.todos
 *	@author kuakman <3dimentionar@gmail.com>
 **/
define(['js/model/todos/todo'], function(Todo) {

	/**
	 *	Todos Model Class
	 *	@namespace com.nahuel.model.todos
	 *	@class com.nahuel.model.todos.TodosModel
	 *	@extends Backbone.Model
	 *	@requires com.nahuel.model.todos.Todo
	 **/
	var TodosModel = app.namespace('com.nahuel.model.todos.TodosModel', Backbone.Model.extend({
		
		/**
		*	Defaults
		*	@public
		*	@property defaults
		*	@type Object
		**/
		defaults: {
			todos: null
		},
		
		/**
		 *	Initialize
		 *	@public
		 *	@method initialize
		 *	@return com.nahuel.model.todos.TodosModel
		 **/
		initialize : function(attrs) {
			attrs || (attrs = {});
			if(!attrs.todos) this.set('todos', new Backbone.Collection([], { model: Todo }), { silent: true });
			return this;
		}

	}, {

		/**
		 *	Class Name
		 *	@static
		 *	@property NAME
		 *	@type String
		 **/
		NAME: 'TodosModel'

	}));

	return TodosModel;

});