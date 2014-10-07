/**
 *	@module com.nahuel.util; 
*	@author kuakman <3dimentionar@gmail.com>
**/
define(['backbone'], function() {
	
	/**
	*	Backbone Utility Package
	*	@namespace Backbone
	**/
	_.extend(Backbone, {
		
		/**
		*	@static
		*	@property Util
		*	@type Object
		**/
		Util: {
			
			/**
			*	Returns a UUID (Universally Unique Identifier)
			*	@static
			*	@method uuid
			*	@return String
			**/
			uuid: function() {
				return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
					var r = Math.random() * 16 | 0, v = (c === 'x') ? r : (r & 0x3 | 0x8);
					return v.toString(16);
				});
			},
			
			/**
			*	Convert a JSON object into a query string format
			*	@public
			*	@method create
			*	@param o {Object} object to be converted
			*	@param [ignoreQMark] {Boolean} optional to skip question mark as part of the query string
			*	@param [separator] {String} separator used to split key-value pairs ('&' by default)
			**/
			createQueryString: function(o, noQMark, separator) {
				var pairs = [], i, len;
				$.each(o, function(k, v) {
					if($.isArray(v)) {
						for (i = 0, len = v.length; i < len; i++) pairs.push(k + '=' + encodeURIComponent(decodeURIComponent(v[i])));
					} else {
						pairs.push(k + '=' + encodeURIComponent(decodeURIComponent(v)));
					}
				});
				return ((noQMark || _.isEmpty(o)) ? '' : '?') + pairs.join((separator) ? separator : '&');
			}
	
		},
	
		/**
		*	Backbone Generic Class
		*	@static
		*	@constructor
		**/
		Class: function(attrs) {
			attrs || (attrs = {});
			if(this.defaults) attrs = _.extend({}, this.defaults, attrs);
			_.extend(this, attrs);
			this.initialize.apply(this, arguments);
		}
	
	});
	
	_.extend(Backbone.Class.prototype, Backbone.Events, {
		
		/**
		*	Default initialize
		*	@public
		*	@method initialize
		*	@param [attrs] {Object} optional attributes
		*	@return {Backbone.Class}
		**/
		initialize: function(attrs) {
			return this;
		},
		
		/**
		*	Serializes the Class instance into a plain javascript object.
		*	@public
		*	@method toJSON
		*	@return Object
		**/
		toJSON: function() {
			return JSON.parse(JSON.stringify(_.omit(this, _.functions(this))));
		},

		/**
		*	Default toString implementation
		*	@public
		*	@method toString
		*	@return String
		**/
		toString: function() {
			return '[object ' + ((this.constructor.NAME) ? this.constructor.NAME : 'BackboneClass') + ']';
		}
		
	});
	
	Backbone.Class.extend = Backbone.Model.extend;
	
});