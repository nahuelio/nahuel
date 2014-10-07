/**
*	@module com.nahuel.view
*	@author kuakman <3dimentionar@gmail.com>
**/
define(['js/controller/todos/controller'], function(TodosController) {

	/**
	*	Todos View Class
	*	@namespace com.nahuel.view
	*	@class com.nahuel.model.view.Todos
	*	@extends Backbone.View
	*	@requires Backbone
	**/
	var TodosView = app.namespace('com.nahuel.view.TodosView', Backbone.View.extend({
		
		/**
		*	UI events
		*	@public
		*	@property events
		*	@type Object
		**/
		events: {
			'click ul li': '_onTodoClick'
		},
		
		/**
		*	Template
		*	@public
		*	@property template
		*	@type Function
		**/
		template: _.template('<ul class="todo-list"></ul>'),
		
		/**
		*	HTML templates
		*	@public
		*	@property html
		*	@type Object
		**/
		html: {
			todo: '<li id="<%= id %>" class="todo"><%= name %></li>'
		},
		
		/**
		*	Initialize
		*	@public
		*	@method initialize
		*	@param [attrs] {Object} attributes
		*	@return com.nahuel.view.TodosView
		**/
		initialize : function(attrs) {
			attrs || (attrs = {});
			if(attrs.controller) this.controller = attrs.controller;
			this.listenTo(this.model.get('todos'), 'reset', this.render, this);
			this.listenTo(this.model.get('todos'), 'add remove', this.update, this);
			this.controller.findAll();
			return this;
		},
		
		/**
		*	Render
		*	@public
		*	@chainable
		*	@method render
		*	@param [model] {com.nahuel.model.todos.Todo} model reference
		*	@return com.nahuel.view.TodosView
		**/
		render: function(model) {
			this.clear();
			this.$list = $(this.template({})).appendTo(this.$el);
			return this;
		},
		
		/**
		*	Update
		*	@public
		*	@chainable
		*	@method update
		*	@param [model] {com.nahuel.model.todos.Todo} model reference
		*	@return com.nahuel.view.TodosView
		**/
		update: function(model) {
			if(this.$list) { this.$list.append(_.template(this.html.todo, model.attributes)); }
			return this;
		},
			
		/**
		*	Clear
		*	@public
		*	@chainable
		*	@method clear
		*	@return com.nahuel.view.TodosView
		**/
		clear: function() {
			this.$el.children().remove();
			return this;
		},
		
		/**
		*	Todo Click Handler
		*	@public
		*	@method _onTodoClick
		*	@param [e] {Object} event reference
		**/
		_onTodoClick: function(e) {
			console.log('Click', e);
		}

	}, {

		/**
		*	Class Name
		*	@static
		*	@property NAME
		*	@type String
		**/
		NAME: 'TodosView',
			
		/**
		*	Static View Initializer
		*	@static
		*	@method create
		*	@param [attrs] {Object} attributes
		*	@return com.nahuel.view.TodosView
		**/
		create: function(attrs) {
			return new TodosView(attrs).render();
		}

	}));

	return TodosView;

});