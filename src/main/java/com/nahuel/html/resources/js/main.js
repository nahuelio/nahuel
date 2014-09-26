/**
*	RequireJS Config
**/
requirejs.config({

	baseUrl: '/nahuel/core',
	
	paths: {
		'lib': 'lib',
		'app': 'js',
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

require(['backbone'], function() {
	console.log('Hello Nahuel!');
});
