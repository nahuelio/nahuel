/**
 *	@module com.nahuel.services.todos
 *	@author kuakman <3dimentionar@gmail.com>
 **/
define(['js/service/service'], function(Service) {

	/**
	 *	Todos Service Class
	 *	@namespace com.nahuel.service.todos
	 *	@class com.nahuel.service.todos.TodosService
	 *	@extends com.nahuel.service.Service
	 **/
	var TodosService = app.namespace('com.nahuel.services.todos.TodosService', Service.extend({

		/**
		*	Initialize
		*	@public
		*	@method initialize
		*	@return com.nahuel.service.todos.TodosService
		**/
		initialize : function() {
			return TodosService.__super__.initialize.apply(this, arguments);
		},
		
		/**
		*	Find All handler
		*	@public
		*	@method onFindAll
		*	@param req {Object} request reference
		*	@param res {Object} response object
		*	@return com.nahuel.service.todos.TodosService
		**/
		onFindAll: function(req, res) {
			this.model.get('todos').reset();
			this.model.get('todos').set(res, req.modelOpts);
			return this;
		},
		
		/**
		*	Find One handler
		*	@public
		*	@method onFindAll
		*	@param req {Object} request reference
		*	@param res {Object} response object
		*	@return com.nahuel.model.todos.Todo
		**/
		onFindOne: function(req, res) {
			var todo = this.model.get('todos').findWhere(res);
			return (todo) ? todo : null;
		},
		
		/**
		*	Find All handler
		*	@public
		*	@method onFindAll
		*	@param req {Object} request reference
		*	@param res {Object} response object
		*	@return com.nahuel.service.todos.TodosService
		**/
		onSave: function(req, res) {
			this.model.get('todos').add(res, req.modelOpts);
			return this;
		},
		
		/**
		*	Find All handler
		*	@public
		*	@method onFindAll
		*	@param req {Object} request reference
		*	@param res {Object} response object
		*	@return com.nahuel.service.todos.TodosService
		**/
		onRemove: function(req, res) {
			this.model.get('todos').remove(res, req.modelOpts);
			return this;
		}

	}, {

		/**
		 *	Class Name
		 *	@static
		 *	@property NAME
		 *	@type String
		 **/
		NAME : 'TodosService'

	}));

	return TodosService;

});