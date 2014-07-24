window.Kelp = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		Kelp.businesses = new Kelp.Collections.Businesses();
		Kelp.users = new Kelp.Collections.Users();
		
		var $rootEl = $('#content');
		new Kelp.Routers.AppRouter($rootEl);
		Backbone.history.start();
	}
};