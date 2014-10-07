/**
*	@module com.nahuel.controller
*	@author kuakman <3dimentionar@gmail.com>
**/
define(['backbone-ext'], function() {
	
	/**
	 *	Base Controller Class
	 *	@namespace com.nahuel.controller
	 *	@class com.nahuel.controller.Controller
	 *	@extends Backbone.Class
	 *	@requires Backbone
	 **/
	var Controller = app.namespace('com.nahuel.controller.Controller', Backbone.Class.extend({
		
		/**
		 *	Initialize
		 *	@public
		 *	@method initialize
		 *	@return {com.nahuel.controller.Controller}
		 **/
		initialize: function() {
			if(!this.endpoint) throw new Error(this.toString() + ' requires an endpoint path');
			if(!this.service) throw new Error(this.toString() + ' requires a service instance');
			this.call = _.compose(this.call, this.before);
			return this;
		},
		
		/**
		*	Handle Options
		*	@public
		*	@method handle
		*	@param req {Object} request data reference
		*	@param [opts] {Object} options
		*	@return Object 
		**/
		_handle: function(req, opts) {
			if(opts.after) req.__after__ = opts.after;
			if(opts.modelOpts) req.modelOpts = opts.modelOpts;
			return opts;
		},
		
		/**
		*	Performs a HTTP Request over ajax using method GET
		*	@private
		*	@method	_get
		*	@param req {Object} request data reference
		*/
		_get: function(req) {
			$.ajax(_.extend({
				url: (this.endpoint + req.action + Backbone.Util.createQueryString(req.params)),
				type: Controller.VERBS.GET,
				success: _.bind(this._success, this, req),
				error: _.bind(this._fail, this, req) 
			}, req.opts));
		},
		
		/**
		*	Performs a HTTP Request over ajax using method POST
		*	@private
		*	@method _post
		*	@param req {Object} request data reference
		**/
		_post: function(req) {
			$.ajax(_.extend({
				url: (this.endpoint + req.action),
				type: Controller.VERBS.POST,
				data: req.params,
				success: _.bind(this._success, this, req),
				error: _.bind(this._fail, this, req) 
			}, req.opts));
		},
		
		/**
		*	Performs a HTTP Request over ajax using method PUT
		*	@private
		*	@method _put
		*	@param req {Object} request data reference
		**/
		_put: function(req) {
			$.ajax(_.extend({
				url: (this.endpoint + req.action),
				type: Controller.VERBS.PUT,
				data: req.params,
				success: _.bind(this._success, this, req),
				error: _.bind(this._fail, this, req) 
			}, req.opts));
		},
		
		/**
		*	Performs a HTTP Request over ajax using method DELETE
		*	@private
		*	@method _delete
		*	@param req {Object} request data reference
		**/
		_delete: function(req) {
			$.ajax(_.extend({
				url: (this.endpoint + req.action),
				type: Controller.VERBS.DELETE,
				data: req.params,
				success: _.bind(this._success, this, req),
				error: _.bind(this._fail, this, req) 
			}, req.opts));
		},
		
		/**
		*	Default Success Ajax Handler
		*	@public
		*	@method success
		*	@param req {Object} request data reference
		*	@param res {Object} response reference
		*	@param textStatus {String} request status
		*	@param jqXHR {Object} Ajax Request object reference
		*	@return com.nahuel.controller.Controller
		**/
		_success: function(req, res, textStatus, jqXHR) {
			if(req.success) req.success.call(this.service, arguments);
			if(!req.skipSuccess) this.trigger(Controller.EVENTS.success, arguments);
			if(req.fireSuccess && _.isString(req.fireSuccess)) Backbone.trigger(req.fireSuccess, arguments);
			if(req.__after__) req.__after__(arguments);
			return this;
		},
		
		/**
		*	Default Fail Ajax Handler
		*	@public
		*	@method fail
		*	@param req {Object} request data reference
		*	@param res {Object} response reference
		*	@param textStatus {String} request status
		*	@param jqXHR {Object} Ajax Request object reference
		*	@return com.nahuel.controller.Controller
		**/
		_fail: function(req, res, textStatus, jqXHR) {
			if(req.fail) req.fail.call(this.service, arguments);
			if(!req.skipFail) this.trigger(Controller.EVENTS.fail, arguments);
			if(req.fireFail && _.isString(req.fireFail)) Backbone.trigger(req.fireFail, arguments);
			if(req.__after__) req.__after__(arguments);
			return this;
		},
		
		/**
		*	Before Execute Hook
		*	@public
		*	@method before
		*	@param req {Object} request data reference
		*	@param [opts] {Object} optional data
		*	@return Object
		**/
		before: function(req, opts) {
			opts || (opts = {});
			if(!req) return null;
			if(!req.action) return null;
			this._handle(req, opts);
			if(req.progress) req.progress(arguments);
			if(!req.skipProgress) this.trigger(Controller.EVENTS.progress, req, opts);
			return req;
		},
		
		/**
		*	Make Ajax Request Call
		*	@public
		*	@method call
		*	@param req {Object} request data reference
		*	@return com.nahuel.controller.Controller
		**/
		call: function(req) {
			if(req && req.method && req.action) {
				if(!req.params || !_.isObject(req.params)) req.params = {};
				if(_.contains(_.values(Controller.VERBS), req.method)) this['_' + req.method](req);
			}
			return this;
		}
	
	}, {
		
		/**
		*	Class Name
		*	@static
		*	@property NAME
		*	@type String
		**/
		NAME: 'Controller',
		
		/**
		*	Http Controller Verbs
		*	@static
		*	@property VERBS
		*	@type Object 
		**/
		VERBS: {
			GET: 'get',
			POST: 'post',
			PUT: 'put',
			DELETE: 'delete'
		},
		
		/**
		*	Events
		*	@static
		*	@property EVENTS
		*	@type Object
		**/
		EVENTS: {
			/**
			*	@event progress
			**/
			progress: 'backbone:controller:progress',
			/**
			*	@event success
			**/
			success: 'backbone:controller:success',
			/**
			*	@event fail
			**/
			fail: 'backbone:controller:fail'
		}
		
	}));
	
	return Controller;
	
});