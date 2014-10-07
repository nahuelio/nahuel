/**
 *	@module com.nahuel.service
 *	@author kuakman <3dimentionar@gmail.com>
 **/
define(['backbone-ext'], function() {

	/**
	 *	Base Service Class
	 *	@namespace com.nahuel.service
	 *	@class com.nahuel.service.Service
	 *	@extends Backbone.Class
	 *	@requires Backbone
	 **/
	var Service = app.namespace('com.nahuel.service.Service', Backbone.Class.extend({

		/**
		*	Initialize
		*	@public
		*	@method initialize
		*	@return com.nahuel.service.Service
		**/
		initialize : function(attrs) {
			attrs || (attrs = {});
			if(!attrs.model) this.model = new Backbone.Model();
			return this;
		},
		
		/**
		*	Default serialize strategy
		*	This method will parse a json object and serialize it into the model associated with this service instance.
		*	@public
		*	@chainable
		*	@method serialize
		*	@param json {Object} json representation of the data
		*	@return com.nahuel.service.Service
		**/
		serialize: function(json, opts) {
			this.model.set(json, opts);
			return this;
		},
		
		/**
		*	Default deserialize strategy
		*	This method will convert the model associated with this service instance into a json object.
		*	@public
		*	@method deserialize
		*	@return Object
		**/
		deserialize: function() {
			return this.model.toJSON();
		}

	}, {

		/**
		 *	Class Name
		 *	@static
		 *	@property NAME
		 *	@type String
		 **/
		NAME: 'Service'

	}));

	return Service;

});