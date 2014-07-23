window.Kelp = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		Kelp.businesses = new Kelp.Collections.Businesses();
		var $rootEl = $('#content');
		new Kelp.Routers.AppRouter($rootEl);
		Backbone.history.start();
	}
};