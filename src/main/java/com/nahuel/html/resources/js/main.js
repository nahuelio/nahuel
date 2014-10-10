/**
*	RequireJS Config
*	@autor kuakman <3dimentionar@gmail.com>
**/
requirejs.config({

	baseUrl: '/nahuel/static',
	
	paths: {
		'lib': 'lib',
		'backbone-ext': 'js/util/backbone-ext',
		'backbone': 'lib/backbone/backbone',
		'underscore': 'lib/underscore/underscore',
		'jquery': 'lib/jquery/dist/jquery',
		'bootstrap': 'lib/bootstrap/dist/js/bootstrap',
		'modernizr': 'lib/modernizr/modernizr'
	},
	
	shim: {
		'backbone': ['bootstrap'],
		'bootstrap': ['jquery', 'modernizr']
	}
	
});

/**
*	Application namespace
*	@global app
**/
app = {
	
	version: '0.0.1',
	
	namespace: function(path, constructor) {
		if(!path || !_.isString(path) || !constructor || !_.isFunction(constructor))
			throw new Error('app.namespace accepts 2 arguments: path (string) and constructor (function).');
		var parts = path.split('.'), parent = window, pl, i;
		if (parts[0] == "app") parts = parts.slice(1);
		pl = parts.length;
		for (var i = 0; i < pl; i++) {
			if (typeof parent[parts[i]] == 'undefined') parent[parts[i]] = {};
			if(i == (pl-1)) parent[parts[i]] = constructor;
			parent = parent[parts[i]];
		}
		return parent;
	},
	
	/**
	*	Creates MVSC
	*	@public
	*	@param M {Backbone.Model} model ref
	*	@param V {Backbone.View} view ref
	*	@param S {Backbone.Service} service ref
	*	@param C {Backbone.Controller} controller ref
	*	@method createMVSC
	*	@return Object
	**/
	createMVSC: function(M, V, S, C) {
		var m = new M(), s = new S({ model: m }), c = new C({ service: s }), v = V.create({ controller: c, model: m });
		return { model: m, service: s, controller: c, view: v };
	}
		
};