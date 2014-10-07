/**
 *	@module com.nahuel.model.todos
 *	@author kuakman <3dimentionar@gmail.com>
 **/
define(['backbone'], function() {

	/**
	 *	Todo Model Class
	 *	@namespace com.nahuel.model.todos
	 *	@class com.nahuel.model.Todo
	 *	@extends Backbone.Model
	 *	@requires Backbone
	 **/
	var Todo = app.namespace('com.nahuel.model.todos.Todo', Backbone.Model.extend({
		
		/**
		*	Defaults
		*	@public
		*	@property defaults
		*	@type Object
		**/
		defaults: {
			id: null,
			name: 'unnamed'
		},
		
		/**
		 *	Initialize
		 *	@public
		 *	@method initialize
		 *	@return com.nahuel.model.todos.Todo
		 **/
		initialize : function() {
			return Todo.__super__.initialize.apply(this, arguments);
		}

	}, {

		/**
		 *	Class Name
		 *	@static
		 *	@property NAME
		 *	@type String
		 **/
		NAME: 'Todo'

	}));

	return Todo;

});