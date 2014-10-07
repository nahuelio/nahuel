/**
 *	@module com.nahuel.controller.todos
 *	@author kuakman <3dimentionar@gmail.com>
 **/
define(['js/controller/controller'], function(Controller) {

	/**
	 *	Todos Controller Class
	 *	@namespace com.nahuel.controller.todos
	 *	@class com.nahuel.controller.todos.TodosController
	 *	@extends com.nahuel.controller.Controller
	 **/
	var TodosController = app.namespace('com.nahuel.controller.todos.TodosController', Controller.extend({
		
		/**
		*	Defaults
		*	@public
		*	@property defaults
		*	@type Object
		**/
		defaults: {
			endpoint: '/nahuel/api/todo/'
		},
		
		/**
		 *	Initialize
		 *	@public
		 *	@method initialize
		 *	@return com.nahuel.controller.todos.TodosController
		 **/
		initialize : function() {
			return TodosController.__super__.initialize.apply(this, arguments);
		},
		
		/**
		*	Find and retrieves all the todos
		*	@public
		*	@method findAll
		**/
		findAll: function() {
			this.call({
				action: 'findAll',
				opts: { dataType: 'json' },
				method: Controller.VERBS.GET,
				success: this.service.onFindAll,
				fireFail: TodosController.EVENTS.fail.findAll
			});
		},
		
		/**
		*	Find and retrieves all the todos
		*	@public
		*	@method findOne
		**/
		findOne: function(id) {
			this.call({
				action: 'findOne',
				opts: { dataType: 'json' },
				method: Controller.VERBS.GET,
				params: { id: id },
				success: this.service.onFindOne,
				fireFail: TodosController.EVENTS.fail.findOne
			});
		},
		
		/**
		*	Find and retrieves all the todos
		*	@public
		*	@method save
		**/
		save: function(model) {
			this.call({
				action: 'save',
				opts: { dataType: 'json' },
				method: Controller.VERBS.PUT,
				params: this.model.toJSON(),
				success: this.service.onSave,
				fireFail: TodosController.EVENTS.fail.save
			});
		},
		
		/**
		*	Find and retrieves all the todos
		*	@public
		*	@method remove
		**/
		remove: function(model) {
			this.call({
				action: 'delete',
				opts: { dataType: 'json' },
				method: Controller.VERBS.DELETE,
				params: this.model.toJSON(),
				success: this.service.onRemove,
				fireFail: TodosController.FAIL_EVENTS.remove
			});
		}

	}, {

		/**
		*	Class Name
		*	@static
		*	@property NAME
		*	@type String
		**/
		NAME: 'TodosController',
		
		/**
		*	Events
		*	@static
		*	@property EVENTS
		*	@type Object 
		**/
		EVENTS: {
			fail: {
				findAll: 'backbone:controller:fail:todos:findall',
				findOne: 'backbone:controller:fail:todos:findOne',
				save: 'backbone:controller:fail:todos:save',
				remove: 'backbone:controller:fail:todos:remove'
			}
		}

	}));

	return TodosController;

});